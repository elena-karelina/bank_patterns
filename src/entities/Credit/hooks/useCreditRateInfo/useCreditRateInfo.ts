import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { ICreditRate } from "../../model";
import { fetchCreditRateData } from "../../api";
import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { useCircuitBreaker } from "@shared/contexts";

export const useCreditRateInfo = (): UseQueryResult<ICreditRate[]> => {
  const circuitBreaker = useCircuitBreaker();

  return useQuery({
    queryFn: () => fetchCreditRateData(circuitBreaker),
    queryKey: [EQueryKeys.CreditRate],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
};
