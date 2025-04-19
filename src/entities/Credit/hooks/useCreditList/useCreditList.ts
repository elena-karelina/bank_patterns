import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys, handleError } from "@shared/api";
import { fetchCreditList } from "@entities/Credit/api";
import { ICredit } from "@entities/Credit/model";

export const useCreditList = (): UseQueryResult<ICredit[]> =>
  useQuery({
    queryFn: () => fetchCreditList(),
    queryKey: [EQueryKeys.CreditList],
    throwOnError: (error) => handleError(error),
  });
