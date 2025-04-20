import { FC } from "react";
import {
  Row,
  Wrapper,
  Data,
  Deposit,
  WithdrawalAmount,
} from "./TransactionHistoryElement.styles";
import { ITransaction, transactionText } from "@entities/Transaction/models";
import { plusTransaction } from "./TransactionHistoryElement.constants";
import { currencySymbols } from "@shared/types";

export const TransactionHistoryElement: FC<ITransaction> = (data) => {
  const { amount, type, performedAt, currency } = data;
  const symbol = currencySymbols[currency];
  const date = new Date(performedAt);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const plus = plusTransaction.has(type);

  return (
    <Wrapper>
      <Row>
        <div>{transactionText[type]}</div>
        {plus ? (
          <Deposit>
            + {amount} {symbol}
          </Deposit>
        ) : (
          <WithdrawalAmount>
            - {amount} {symbol}
          </WithdrawalAmount>
        )}
      </Row>
      <Data>
        {formattedDate} {formattedTime}
      </Data>
    </Wrapper>
  );
};
