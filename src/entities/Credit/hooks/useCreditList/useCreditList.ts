import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys } from "@shared/api";
import { fetchCreditList } from "@entities/Credit/api";
import { ICredit } from "@entities/Credit/model";

export const useCreditList = (): UseQueryResult<ICredit[]> =>
  useQuery({
    queryFn: () => fetchCreditList(),
    queryKey: [EQueryKeys.CreditList],
  });
