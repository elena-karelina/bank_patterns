import { fetchTransactionHistory } from "@entities/Transaction/api";
import { ITransaction } from "@entities/Transaction/models";
import { EQueryKeys } from "@shared/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useTransactionHistory = (
  id: string
): UseQueryResult<ITransaction[]> =>
  useQuery({
    queryFn: () => fetchTransactionHistory(id),
    queryKey: [EQueryKeys.TransactionHistory, id],
  });
