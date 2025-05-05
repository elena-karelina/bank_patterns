import { TTheme } from "@entities/Theme/models";
import { fetchWithCircuitBreaker, HttpError } from "@shared/api";
import { CircuitBreakerControls } from "@shared/types";

export const fetchGetTheme = async (
  circuitBreaker: CircuitBreakerControls
): Promise<TTheme> => {
  const url = `http://51.250.46.120:5004/api/theme`;
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

  const result: TTheme = await response.json();

  console.log(result);

  return result;
};
