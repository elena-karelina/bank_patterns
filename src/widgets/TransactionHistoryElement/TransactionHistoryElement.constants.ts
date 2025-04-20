import { ETransactionType } from "@entities/Transaction/models";

export const plusTransaction = new Set([
  ETransactionType.Deposit,
  ETransactionType.LoanAccrual,
  ETransactionType.TransferTo,
]);
