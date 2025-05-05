import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { IAccount } from "@entities/Account/models";
import { fetchAccountList } from "@entities/Account/api";
import { useCircuitBreaker } from "@shared/contexts";

export const useAccountList = (id: string): UseQueryResult<IAccount[]> => {
  const circuitBreaker = useCircuitBreaker();

  return useQuery({
    queryFn: () => fetchAccountList(id, circuitBreaker),
    queryKey: [EQueryKeys.AccountList, id],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
};
