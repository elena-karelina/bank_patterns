import { ICreditRate } from "@entities/Credit/model";
import { ITransaction } from "@entities/Transaction/models";
import { IPayment } from "@entities/Transaction/models/types/transaction";

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
  payments: IPayment[];
}
