import { IAccount } from "@entities/Account/models";
import { IAccountListResponse } from "./fetchAccountList.interfaces";
import { fetchWithCircuitBreaker, HttpError } from "@shared/api";
import { CircuitBreakerControls } from "@shared/types";

export const fetchAccountList = async (
  id: string,
  circuitBreaker: CircuitBreakerControls
): Promise<IAccount[]> => {
  const url = `http://51.250.46.120:5001/core/support/account?Users=${id}`;
  const token = localStorage.getItem("token");

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

  const data: IAccountListResponse = await response.json();
  return data.accounts;
};
