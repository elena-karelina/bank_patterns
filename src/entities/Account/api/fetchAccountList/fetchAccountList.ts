import { IAccount } from "@entities/Account/models";
import { IAccountListresult } from "./fetchAccountList.interfaces";
import { HttpError } from "@shared/api";
import { CircuitBreakerControls } from "@shared/types";
import { fetchWithCircuitBreaker } from "@shared/api";

export const fetchAccountList = async (
  circuitBreaker: CircuitBreakerControls
): Promise<IAccount[]> => {
  const url = `http://51.250.46.120:5001/core/account`;
  const token = localStorage.getItem("userToken");
  console.log("userToken", token);

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

  const data: IAccountListresult = await response.json();

  return data.accounts;
};
