import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys, handleError } from "@shared/api";
import { fetchCreditList } from "@entities/Credit/api";
import { ICredit } from "@entities/Credit/model";

export const useCreditList = (id: string): UseQueryResult<ICredit[]> =>
  useQuery({
    queryFn: () => fetchCreditList(id),
    queryKey: [EQueryKeys.CreditList, id],
    throwOnError: (error) => handleError(error),
  });
