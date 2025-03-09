import { ITransaction } from "@entities/Transaction/models";

export interface ITransactionHistory {
  transactions: ITransaction[];
}
