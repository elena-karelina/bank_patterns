import { ITransaction } from "@entities/Transaction/models";

export interface ICredit {
  id: string;
  amount: number;
  rate: number;
  deadlineTime: string;
  status: string;
  transactions?: ITransaction[];
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
