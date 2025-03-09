import { ICreditRate } from "@entities/Credit/model";
import { ITransaction } from "@entities/Transaction/models";

export interface ICreateCreditRequest {
  amount: number;
  termDays: number;
  rateId: string;
  accountIdToReceiveMoney: string;
}

export interface ICreateCreditResult {
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
