import { ITransaction } from "@entities/Transaction/models";

export interface IAccount {
  id: string;
  name: string;
  status: string;
  balance: number;
  transactions?: ITransaction[];
}
