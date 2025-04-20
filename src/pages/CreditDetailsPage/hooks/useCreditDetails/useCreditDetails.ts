import { fetchCreditDetails } from "@entities/Credit/api";
import { ICreditFull } from "@entities/Credit/model";
import { EQueryKeys, handleError } from "@shared/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useCreditDetails = (id: string): UseQueryResult<ICreditFull> =>
  useQuery({
    queryFn: () => fetchCreditDetails(id),
    queryKey: [EQueryKeys.CreditDetails, id],
    throwOnError: (error) => handleError(error),
  });
