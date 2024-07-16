import { TransactionStatus } from 'constants/transaction'
import type { Transaction, TransactionWithMetadata } from 'types/transaction'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface TransactionsDefaultState {
  pendingTransactions: TransactionWithMetadata[]
  finalizedTransactions: TransactionWithMetadata[]
}

interface TransactionsState extends TransactionsDefaultState {
  addPendingTransactions: (transaction: Transaction) => void
  getNextNonceForAccount: (address: string) => number
  removePendingTransactions: (transaction: Transaction) => void
  markAsFinalized: (transaction: Transaction, status: TransactionStatus) => void
  moveToFinalizedTransactions: (transaction: Transaction) => void
  clear: () => void
}

const initialState: TransactionsDefaultState = {
  pendingTransactions: [],
  finalizedTransactions: [],
}

export const useTransactionsStates = create<TransactionsState>()(
  persist(
    (set, get) => ({
      ...initialState,
      addPendingTransactions: (transaction: Transaction) =>
        set((state) => ({
          pendingTransactions: [
            ...state.pendingTransactions,
            { ...transaction, submittedAtLocalTimestamp: new Date() },
          ],
        })),
      getNextNonceForAccount: (address: string) => {
        const tx = get()
          .pendingTransactions.filter((t) => t.ownerAccount.address === address)
          .sort((a, b) => a.nonce - b.nonce)
          .pop()
        return tx ? tx.nonce + 1 : 0
      },
      removePendingTransactions: (transaction: Transaction) =>
        set((state) => ({
          pendingTransactions: state.pendingTransactions.filter(
            (t) => t.txHash !== transaction.txHash,
          ),
        })),
      markAsFinalized: (transaction: Transaction, status: TransactionStatus) =>
        set((state) => {
          const pendingTransaction = state.pendingTransactions.find(
            (t) => t.txHash === transaction.txHash,
          )
          if (!pendingTransaction) return state
          return {
            pendingTransactions: [
              ...state.pendingTransactions.filter(
                (t) => t.status === TransactionStatus.Pending && t.txHash !== transaction.txHash,
              ),
              {
                ...pendingTransaction,
                status,
                finalizedAtLocalTimestamp: new Date(),
              },
            ],
          }
        }),
      moveToFinalizedTransactions: (transaction: Transaction) =>
        set((state) => ({
          pendingTransactions: state.pendingTransactions.filter(
            (t) => t.txHash !== transaction.txHash,
          ),
          finalizedTransactions: [
            ...state.finalizedTransactions,
            { ...transaction, submittedAtLocalTimestamp: new Date() },
          ],
        })),
      clear: () => set(() => ({ ...initialState })),
    }),
    {
      name: 'transactions-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
