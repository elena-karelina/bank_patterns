import { useStores } from "@shared/contexts/stores";
import { Divider, ItemListShimmer } from "@shared/ui";
import { useTransactionHistory } from "@widgets/TransactionHistory/hooks";
import { TransactionHistoryElement } from "@widgets/TransactionHistoryElement";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TransactionHistoryProps } from "./TransactionHistory.interfaces";
import { TEXTS } from "./TransactionHistory.constants";

export const TransactionHistory: FC<TransactionHistoryProps> = observer(
  ({ className }) => {
    const {
      accountStore: { clickedAccount, setTransactions },
    } = useStores();
    const { id } = useParams();

    const { status, data: transactionHistory } = useTransactionHistory(
      id as string
    );

    useEffect(() => {
      if (transactionHistory) {
        setTransactions({
          id: id as string,
          transactions: transactionHistory,
        });
      }
    }, [transactionHistory, setTransactions, id]);

    if (status === "pending") {
      return <ItemListShimmer />;
    }

    if (transactionHistory?.length === 0) {
      return <div className={className}>{TEXTS.noTransactions}</div>;
    }

    return (
      <div className={className}>
        {clickedAccount?.transactions?.map((item, index) => (
          <div key={index}>
            <TransactionHistoryElement {...item} />
            {clickedAccount?.transactions &&
              index < clickedAccount?.transactions.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    );
  }
);
