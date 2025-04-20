import { ECurrencies } from "@shared/types";

export interface ITransaction {
  id: string;
  amount: number;
  type: ETransactionType;
  performedAt: string;
  currency: ECurrencies;
}
export interface IPayment {
  id: string;
  amount: number;
  status: ETransactionType;
  paymentTime: string;
}

export enum ETransactionType {
  Deposit = "Deposit",
  Withdrawal = "Withdrawal",
  LoanAccrual = "LoanAccrual",
  LoanPayment = "LoanPayment",
  Payed = "Payed",
  Overdue = "Overdue",
  NotYet = "NotYet",
  TransferTo = "TransferTo",
  TransferFrom = "TransferFrom",
}
export const transactionText: Record<ETransactionType, string> = {
  [ETransactionType.Deposit]: "Пополнение",
  [ETransactionType.Withdrawal]: "Снятие",
  [ETransactionType.LoanAccrual]: "Сумма займа",
  [ETransactionType.LoanPayment]: "Выплата кредита",
  [ETransactionType.Payed]: "Списание по кредиту",
  [ETransactionType.Overdue]: "Списание просрочено",
  [ETransactionType.NotYet]: "Списание ожидается",
  [ETransactionType.TransferTo]: "Поступление",
  [ETransactionType.TransferFrom]: "Перевод",
};
