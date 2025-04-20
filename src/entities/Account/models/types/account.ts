import { ITransaction } from "@entities/Transaction/models";
import { ECurrencies } from "@shared/types";

export interface IAccount {
  id: string;
  name: string;
  number: string;
  status: string;
  balance: number;
  currency: ECurrencies;
  transactions?: ITransaction[];
}
