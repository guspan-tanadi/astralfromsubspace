'use client'

import { PAGE_SIZE, searchTypes } from '@/constants'
import { bigNumberToNumber, numberWithCommas } from '@/utils/number'
import { shortString } from '@/utils/string'
import { useApolloClient, useQuery } from '@apollo/client'
import type { SortingState } from '@tanstack/react-table'
import { useEvmExplorerBanner } from 'components/common/EvmExplorerBanner'
import { SearchBar } from 'components/common/SearchBar'
import { SortedTable } from 'components/common/SortedTable'
import { Spinner } from 'components/common/Spinner'
import { NotFound } from 'components/layout/NotFound'
import { INTERNAL_ROUTES } from 'constants/routes'
import type { Account, AccountsConnectionQuery } from 'gql/graphql'
import useDomains from 'hooks/useDomains'
import useMediaQuery from 'hooks/useMediaQuery'
import Link from 'next/link'
import { FC, useCallback, useMemo, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import type { Cell } from 'types/table'
import { downloadFullData } from 'utils/downloadFullData'
import { AccountIcon } from '../common/AccountIcon'
import { QUERY_ACCOUNT_CONNECTION_LIST } from './query'

export const AccountList: FC = () => {
  const { selectedChain, selectedDomain } = useDomains()
  const [sorting, setSorting] = useState<SortingState>([{ id: 'id', desc: false }])
  const [pagination, setPagination] = useState({
    pageSize: PAGE_SIZE,
    pageIndex: 0,
  })
  const novaExplorerBanner = useEvmExplorerBanner('accounts')
  const isLargeLaptop = useMediaQuery('(min-width: 1440px)')

  const variables = useMemo(
    () => ({
      first: pagination.pageSize,
      after:
        pagination.pageIndex > 0
          ? (pagination.pageIndex * pagination.pageSize).toString()
          : undefined,
    }),
    [pagination.pageSize, pagination.pageIndex],
  )

  const { data, error, loading } = useQuery<AccountsConnectionQuery>(
    QUERY_ACCOUNT_CONNECTION_LIST,
    {
      variables,
      pollInterval: 6000,
    },
  )

  useErrorHandler(error)

  const accountsConnection = useMemo(() => data && data.accountsConnection, [data])
  const accounts = useMemo(
    () => accountsConnection && accountsConnection.edges.map((account) => account.node as Account),
    [accountsConnection],
  )
  const totalCount = useMemo(
    () => (accountsConnection ? accountsConnection.totalCount : 0),
    [accountsConnection],
  )
  const totalLabel = useMemo(() => numberWithCommas(Number(totalCount)), [totalCount])

  const theme = useMemo(() => (selectedChain.isDomain ? 'ethereum' : 'beachball'), [selectedChain])

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
        enableSorting: false,
        cell: ({ row }: Cell<Account>) => (
          <div key={`${row.index}-account-index`}>
            {row.index + 1 > 1 ? totalCount + row.index + 1 : row.index + 1}
          </div>
        ),
      },
      {
        accessorKey: 'account',
        header: 'Account',
        enableSorting: false,
        cell: ({ row }: Cell<Account>) => (
          <div key={`${row.index}-account-id`} className='row flex items-center gap-3'>
            <AccountIcon address={row.original.id} size={26} theme={theme} />
            <Link
              data-testid={`account-link-${row.index}`}
              href={INTERNAL_ROUTES.accounts.id.page(
                selectedChain.urls.page,
                selectedDomain,
                row.original.id,
              )}
              className='hover:text-purpleAccent'
            >
              <div>{isLargeLaptop ? row.original.id : shortString(row.original.id)}</div>
            </Link>
          </div>
        ),
      },
      {
        accessorKey: 'extrinsics',
        header: 'Extrinsics',
        enableSorting: false,
        cell: ({ row }: Cell<Account>) => (
          <div key={`${row.index}-account-extrinsic`}>{row.original.extrinsics.length}</div>
        ),
      },
      {
        accessorKey: 'reserved',
        header: 'Locked (tSSC)',
        enableSorting: false,
        cell: ({ row }: Cell<Account>) => (
          <div key={`${row.index}-account-locked`}>
            {row.original.reserved ? numberWithCommas(bigNumberToNumber(row.original.reserved)) : 0}
          </div>
        ),
      },
      {
        accessorKey: 'free',
        header: 'Balance (tSSC)',
        enableSorting: false,
        cell: ({ row }: Cell<Account>) => (
          <div key={`${row.index}-account-locked`}>
            {row.original.free ? numberWithCommas(bigNumberToNumber(row.original.free)) : 0}
          </div>
        ),
      },
    ],
    [isLargeLaptop, selectedChain.urls.page, selectedDomain, theme, totalCount],
  )

  const pageCount = useMemo(
    () => Math.floor(totalCount / pagination.pageSize),
    [totalCount, pagination],
  )

  const apolloClient = useApolloClient()
  const fullDataDownloader = useCallback(
    () => downloadFullData(apolloClient, QUERY_ACCOUNT_CONNECTION_LIST, 'accountsConnection'),
    [apolloClient],
  )

  if (loading) return <Spinner />
  if (!data || !accounts) return <NotFound />

  return (
    <div className='flex w-full flex-col align-middle'>
      {novaExplorerBanner}
      <div className='grid w-full lg:grid-cols-2'>
        <SearchBar fixSearchType={searchTypes[3]} />
      </div>
      <div className='mt-5 flex w-full justify-between'>
        <div className='text-base font-medium text-grayDark dark:text-white'>{`Holders (${totalLabel})`}</div>
      </div>
      <div className='mt-5 flex w-full flex-col sm:mt-0'>
        <div className='w-full'>
          <div className='my-6 rounded'>
            <SortedTable
              data={accounts}
              columns={columns}
              showNavigation={true}
              sorting={sorting}
              onSortingChange={setSorting}
              pagination={pagination}
              pageCount={pageCount}
              onPaginationChange={setPagination}
              filename='accounts-list'
              fullDataDownloader={fullDataDownloader}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
