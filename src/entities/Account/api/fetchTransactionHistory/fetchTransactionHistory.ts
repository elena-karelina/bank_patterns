import { ITransaction } from "@entities/Transaction/models";
import { ITransactionHistory } from "./fetchTransactionHistory.interfaces";
import { fetchWithCircuitBreaker, HttpError } from "@shared/api";
import { CircuitBreakerControls } from "@shared/types";

export const fetchTransactionHistory = async (
  id: string,
  circuitBreaker: CircuitBreakerControls
): Promise<ITransaction[]> => {
  const url = `http://51.250.46.120:5001/core/support/transactions/${id}`;
  const token = localStorage.getItem("token");
  console.log("token", token);

  const response = await fetchWithCircuitBreaker(
    url,
    {
      method: "GET",
      headers: {
        Accept: "text/plain",
        Authorization: `Bearer ${token}`,
      },
    },
    circuitBreaker
  );

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  const data: ITransactionHistory = await response.json();
  console.log(data.transactions);
  return data.transactions;
};
