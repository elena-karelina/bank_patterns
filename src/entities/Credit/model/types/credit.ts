import { ITransaction } from "@entities/Transaction/models";
import { IPayment } from "@entities/Transaction/models/types/transaction";

export interface ICredit {
  id: string;
  amount: number;
  rate: number;
  deadlineTime: string;
  status: string;
  transactions?: ITransaction[];
}
export interface ICreditFull {
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
export interface ICreditRate {
  id: string;
  name: string;
  yearlyRate: number;
}
export interface ICalculateCreditResult {
  totalAmount: number;
  dailyPayment: number;
}
