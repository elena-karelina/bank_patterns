import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { fetchCreditList } from "@entities/Credit/api";
import { ICredit } from "@entities/Credit/model";
import { useCircuitBreaker } from "@shared/contexts";

export const useCreditList = (): UseQueryResult<ICredit[]> => {
  const circuitBreaker = useCircuitBreaker();

  return useQuery({
    queryFn: () => fetchCreditList(circuitBreaker),
    queryKey: [EQueryKeys.CreditList],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
};
