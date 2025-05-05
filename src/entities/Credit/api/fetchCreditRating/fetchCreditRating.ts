import { fetchWithCircuitBreaker, HttpError } from "@shared/api";
import { CircuitBreakerControls } from "@shared/types";

export const fetchCreditRating = async (
  circuitBreaker: CircuitBreakerControls
): Promise<number> => {
  const url = `http://51.250.46.120:5002/api/loan/my-rating`;
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

  const data: number = await response.json();

  return data;
};
