import { fetchWithCircuitBreaker, HttpError } from "@shared/api";
import { ICreditDetailsResult } from "./fetchCreditDetails.interfaces";
import { CircuitBreakerControls } from "@shared/types";

export const fetchCreditDetails = async (
  id: string,
  circuitBreaker: CircuitBreakerControls
): Promise<ICreditDetailsResult> => {
  const url = `http://51.250.46.120:5002/api/loan/${id}`;
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

  const result: ICreditDetailsResult = await response.json();
  console.log(result);
  return result;
};
