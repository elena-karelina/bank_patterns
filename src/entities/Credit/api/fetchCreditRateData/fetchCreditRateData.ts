import { fetchWithCircuitBreaker, HttpError } from "@shared/api";
import { ICreditRateDataResponse } from "./fetchCreditRateData.interfaces";
import { CircuitBreakerControls } from "@shared/types";

export const fetchCreditRateData = async (
  circuitBreaker: CircuitBreakerControls
): Promise<ICreditRateDataResponse> => {
  const url = `http://51.250.46.120:5002/api/rate/list`;
  const token = localStorage.getItem("userToken");

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

  const data: ICreditRateDataResponse = await response.json();
  return data;
};
