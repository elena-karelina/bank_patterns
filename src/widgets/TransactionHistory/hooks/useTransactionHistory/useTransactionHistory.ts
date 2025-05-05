import { fetchTransactionHistory } from "@entities/Account/api";
import { ITransaction } from "@entities/Transaction/models";
import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { useCircuitBreaker } from "@shared/contexts";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useTransactionHistory = (
  id: string
): UseQueryResult<ITransaction[]> => {
  const circuitBreaker = useCircuitBreaker();

  return useQuery({
    queryFn: () => fetchTransactionHistory(id, circuitBreaker),
    queryKey: [EQueryKeys.TransactionHistory, id],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
};
