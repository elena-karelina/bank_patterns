import { HttpError } from "@shared/api";
import { IFetchTransferMoneyToAccountOptions } from "./fetchTransferMoneyToAccount.interfaces";
import { v4 } from "uuid";

export const fetchTransferMoneyToAccount = async ({
  fromAccount,
  toAccount,
  amount,
}: IFetchTransferMoneyToAccountOptions): Promise<null> => {
  const url = `http://51.250.46.120:5001/core/transaction/${fromAccount}/transfer?DestinationAccountNumber=${toAccount}&Amount=${amount}`;
  const token = localStorage.getItem("userToken");
  const idempotencyKey = v4();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
      "Idempotency-Key": idempotencyKey,
    },
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  return null;
};
