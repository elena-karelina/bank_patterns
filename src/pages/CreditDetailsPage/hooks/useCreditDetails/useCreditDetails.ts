import { fetchCreditDetails } from "@entities/Credit/api";
import { ICreateCreditResult } from "@entities/Credit/api/fetchCreateCredit/fetchCreateCredit.interfaces";
import { EQueryKeys } from "@shared/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useCreditDetails = (
  id: string
): UseQueryResult<ICreateCreditResult> =>
  useQuery({
    queryFn: () => fetchCreditDetails(id),
    queryKey: [EQueryKeys.CreditDetails, id],
  });
