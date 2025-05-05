import { ICredit } from "@entities/Credit/model";
import { fetchWithCircuitBreaker, HttpError } from "@shared/api";
import { CircuitBreakerControls } from "@shared/types";

export const fetchCreditList = async (
  id: string,
  circuitBreaker: CircuitBreakerControls
): Promise<ICredit[]> => {
  const url = `http://51.250.46.120:5002/api/loan/history?userId=${id}`;
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

  const data: ICredit[] = await response.json();

  return data;
};
