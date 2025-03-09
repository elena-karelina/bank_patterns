import { ITransaction } from "@entities/Transaction/models";
import { ITransactionHistory } from "./fetchTransactionHistory.interfaces";

export const fetchTransactionHistory = async (
  id: string
): Promise<ITransaction[]> => {
  const url = `http://51.250.46.120:5001/core/transaction/history?Accounts=${id}`;
  const token = localStorage.getItem("token");
  console.log("token", token);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("error");
  }

  const data: ITransactionHistory = await response.json();
  console.log(data.transactions);
  return data.transactions;
};
