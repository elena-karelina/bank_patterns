import { fetchTransactionHistory } from "@entities/Transaction/api";
import { ITransaction } from "@entities/Transaction/models";
import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useTransactionHistory = (
  id: string
): UseQueryResult<ITransaction[]> =>
  useQuery({
    queryFn: () => fetchTransactionHistory(id),
    queryKey: [EQueryKeys.TransactionHistory, id],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
