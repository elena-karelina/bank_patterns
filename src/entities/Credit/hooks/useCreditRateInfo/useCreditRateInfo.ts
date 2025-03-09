import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { ICreditRate } from "../../model";
import { fetchCreditRateData } from "../../api";
import { EQueryKeys } from "@shared/api";

export const useCreditRateInfo = (): UseQueryResult<ICreditRate[]> =>
  useQuery({
    queryFn: fetchCreditRateData,
    queryKey: [EQueryKeys.CreditRate],
  });
