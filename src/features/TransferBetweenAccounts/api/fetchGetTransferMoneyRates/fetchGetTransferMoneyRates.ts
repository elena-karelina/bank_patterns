import { HttpError } from "@shared/api";
import { IFetchGetTransferMoneyRatesOptions } from "./fetchGetTransferMoneyRates.interfaces";
import { ITransferMoneyRates } from "@features/TransferBetweenAccounts/model";

export const fetchGetTransferMoneyRates = async ({
  fromAccount,
  toAccount,
}: IFetchGetTransferMoneyRatesOptions): Promise<ITransferMoneyRates> => {
  const url = `http://51.250.46.120:5001/core/transaction/rates?AccountId=${fromAccount}&DestinationAccountNumber=${toAccount}`;
  const token = localStorage.getItem("userToken");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  const result: ITransferMoneyRates = await response.json();
  console.log(result);
  return result;
};
