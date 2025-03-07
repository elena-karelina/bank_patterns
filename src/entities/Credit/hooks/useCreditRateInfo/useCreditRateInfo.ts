import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { ICredit } from "../../model";
import { fetchCreditRateData } from "../../api";
import { EQueryKeys } from "@shared/api";

export const useCreditRateInfo = (): UseQueryResult<ICredit[]> =>
  useQuery({
    queryFn: fetchCreditRateData,
    queryKey: [EQueryKeys.CreditRate],
  });
