import { Divider } from "@shared/ui";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { TransactionHistoryProps } from "./CreditTransactionHistory.interfaces";
import { CreditTransactionHistoryElement } from "@widgets/CreditTransactionHistoryElement";

export const CreditTransactionHistory: FC<TransactionHistoryProps> = observer(
  ({ className, transactions }) => {
    console.log(transactions);

    if (!transactions || transactions.length === 0) {
      return <div className={className}>транзакций нет</div>;
    }

    return (
      <div className={className}>
        {transactions?.map((item, index) => (
          <div key={index}>
            <CreditTransactionHistoryElement {...item} />
            {index < transactions.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    );
  }
);
