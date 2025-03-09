import { ICreditRate } from "@entities/Credit/model";
import { ITransaction } from "@entities/Transaction/models";

export interface ICreditDetailsResult {
  id: string;
  userId: string;
  rate: ICreditRate;
  status: string;
  givenMoney: number;
  createTime: string;
  deadlineTime: string;
  termDays: number;
  dailyPayment: number;
  totalMoneyToPay: number;
  moneyLeftToPay: number;
  transactions: ITransaction[];
}
