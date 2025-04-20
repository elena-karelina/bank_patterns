import { fetchCreditRating } from "@entities/Credit/api";
import { EQueryKeys, handleError } from "@shared/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useCreditRating = (id: string): UseQueryResult<number> =>
  useQuery({
    queryFn: () => fetchCreditRating(id),
    queryKey: [EQueryKeys.CreditRating],
    throwOnError: (error) => handleError(error),
  });
