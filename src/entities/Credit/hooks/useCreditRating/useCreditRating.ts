import { fetchCreditRating } from "@entities/Credit/api";
import { EQueryKeys, handleError } from "@shared/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useCreditRating = (): UseQueryResult<number> =>
  useQuery({
    queryFn: () => fetchCreditRating(),
    queryKey: [EQueryKeys.CreditRating],
    throwOnError: (error) => handleError(error),
  });
