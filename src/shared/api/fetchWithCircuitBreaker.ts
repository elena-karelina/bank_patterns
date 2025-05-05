import { CircuitBreakerControls } from "@shared/types";
import { HttpError } from "./error";

export const fetchWithCircuitBreaker = async (
  input: RequestInfo,
  init: RequestInit = {},
  circuitBreaker: CircuitBreakerControls
): Promise<Response> => {
  const { canRequest, recordSuccess, recordFailure } = circuitBreaker;

  if (!canRequest()) {
    console.log("Circuit breaker is open");
    throw new HttpError("Circuit breaker is open", 500);
  }

  try {
    const response = await fetch(input, init);

    if (!response.ok) {
      recordFailure();
    } else {
      recordSuccess();
    }

    return response;
  } catch (e) {
    recordFailure();
    throw e;
  }
};
