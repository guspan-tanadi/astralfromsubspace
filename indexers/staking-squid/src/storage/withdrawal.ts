import { randomUUID } from "crypto";
import { Withdrawal, WithdrawalStatus } from "../model";
import type { CtxBlock, CtxExtrinsic } from "../processor";
import { getBlockNumber, getCallSigner, getTimestamp } from "../utils";
import { Cache } from "../utils/cache";
import { getOrCreateAccount } from "./account";
import { getOrCreateDomain } from "./domain";
import { getOrCreateNominator } from "./nominator";
import { getOrCreateOperator } from "./operator";

export const createWithdrawal = (
  cache: Cache,
  block: CtxBlock,
  extrinsic: CtxExtrinsic,
  props: Partial<Withdrawal>
): Withdrawal => {
  const address = getCallSigner(extrinsic.call);

  if (!props.domain) props.domain = getOrCreateDomain(cache, block, 0);
  if (!props.account) props.account = getOrCreateAccount(cache, block, address);
  if (!props.domain) props.domain = getOrCreateDomain(cache, block, 0);

  if (!props.operator)
    props.operator = getOrCreateOperator(cache, block, extrinsic, 0);
  if (!props.nominator)
    props.nominator = getOrCreateNominator(cache, block, extrinsic, 0);

  const withdrawal = new Withdrawal({
    id: randomUUID(),
    shares: BigInt(0),
    status: WithdrawalStatus.PENDING,
    ...props,
    blockNumber: getBlockNumber(block),
    timestamp: getTimestamp(block),
    extrinsicHash: extrinsic.hash,
  });

  return withdrawal;
};
