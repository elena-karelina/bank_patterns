import { fetchTransactionHistory } from "@entities/Account/api";
import { EQueryKeys } from "@shared/api";
import { ITransaction } from "@shared/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useTransactionHistory = (
  id: string
): UseQueryResult<ITransaction[]> =>
  useQuery({
    queryFn: () => fetchTransactionHistory(id),
    queryKey: [EQueryKeys.TransactionHistory, id],
  });
