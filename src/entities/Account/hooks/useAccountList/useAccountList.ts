import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { fetchAccountList } from "@entities/Account/api/fetchAccountList";
import { IAccount } from "@entities/Account/models";
import { useCircuitBreaker } from "@shared/contexts";

export const useAccountList = (): UseQueryResult<IAccount[]> => {
  const circuitBreaker = useCircuitBreaker();

  return useQuery({
    queryFn: () => fetchAccountList(circuitBreaker),
    queryKey: [EQueryKeys.AccountList],
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
    throwOnError: (error) => handleError(error),
  });
};
