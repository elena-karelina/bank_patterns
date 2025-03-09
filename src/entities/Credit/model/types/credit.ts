export interface ICreditRate {
  id: string;
  name: string;
  rate: number;
}
export interface ICalculateCreditResult {
  totalAmount: number;
  monthlyPayment: number;
}
