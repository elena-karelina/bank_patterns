import { ICalculateCreditResult } from "@entities/Credit/model";

export interface ICalculateCreditResponse {
  data: ICalculateCreditResult;
}
export interface ICalculateCreditRequest {
  amount: number;
  termMonths: number;
  rateId: string;
}
