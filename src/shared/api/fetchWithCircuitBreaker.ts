import { CircuitBreakerControls } from "@shared/types";

export const fetchWithCircuitBreaker = async (
  input: RequestInfo,
  init: RequestInit = {},
  circuitBreaker: CircuitBreakerControls
): Promise<Response> => {
  const { canRequest, recordSuccess, recordFailure } = circuitBreaker;

  if (!canRequest()) {
    throw new Error(
      "Circuit breaker is open — requests are temporarily blocked"
    );
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
