import { fetchCreditDetails } from "@entities/Credit/api";
import { ICreditFull } from "@entities/Credit/model";
import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { useCircuitBreaker } from "@shared/contexts";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useCreditDetails = (id: string): UseQueryResult<ICreditFull> => {
  const circuitBreaker = useCircuitBreaker();

  return useQuery({
    queryFn: () => fetchCreditDetails(id, circuitBreaker),
    queryKey: [EQueryKeys.CreditDetails, id],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
};
