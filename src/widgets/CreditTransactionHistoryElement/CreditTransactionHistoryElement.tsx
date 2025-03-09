import { FC } from "react";
import {
  Row,
  Wrapper,
  Data,
  Deposit,
  WithdrawalAmount,
  NotYet,
} from "./CreditTransactionHistoryElement.styles";
import { transactionText } from "@entities/Transaction/models";
import {
  ETransactionType,
  IPayment,
} from "@entities/Transaction/models/types/transaction";

export const CreditTransactionHistoryElement: FC<IPayment> = (data) => {
  const { amount, status, paymentTime } = data;
  console.log(amount, status, paymentTime);
  console.log(transactionText[status]);
  const date = new Date(paymentTime);

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

  return (
    <Wrapper>
      <Row>
        <div>{transactionText[status]}</div>
        {status === ETransactionType.Payed ? (
          <Deposit>- {amount} P</Deposit>
        ) : status === ETransactionType.NotYet ? (
          <NotYet>- {amount} P</NotYet>
        ) : (
          <WithdrawalAmount>- {amount} P</WithdrawalAmount>
        )}
      </Row>
      <Data>
        {formattedDate} {formattedTime}
      </Data>
    </Wrapper>
  );
};
