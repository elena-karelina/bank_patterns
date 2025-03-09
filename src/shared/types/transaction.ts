export interface ITransaction {
  id: string;
  amount: number;
  type: ETransactionType;
  performedAt: string;
}

export enum ETransactionType {
  Deposit = "Deposit",
  Withdrawal = "Withdrawal",
  LoanAccrual = "LoanAccrual",
  LoanPayment = "LoanPayment",
}
export const transactionText: Record<ETransactionType, string> = {
  [ETransactionType.Deposit]: "Пополнение",
  [ETransactionType.Withdrawal]: "Снятие",
  [ETransactionType.LoanAccrual]: "Сумма займа",
  [ETransactionType.LoanPayment]: "Выплата кредита",
};
