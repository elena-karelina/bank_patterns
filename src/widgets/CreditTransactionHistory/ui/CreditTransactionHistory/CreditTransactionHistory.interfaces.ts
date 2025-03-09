import { IPayment } from "@entities/Transaction/models/types/transaction";

export interface TransactionHistoryProps {
  className?: string;
  transactions?: IPayment[];
}
