import { fetchCreditRating } from "@entities/Credit/api";
import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { useCircuitBreaker } from "@shared/contexts";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useCreditRating = (): UseQueryResult<number> => {
  const circuitBreaker = useCircuitBreaker();

  return useQuery({
    queryFn: () => fetchCreditRating(circuitBreaker),
    queryKey: [EQueryKeys.CreditRating],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
};
