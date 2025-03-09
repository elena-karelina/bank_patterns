import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { ICalculateCreditResult } from "../../model";
import { EQueryKeys } from "@shared/api";
import {
  fetchCalculateCredit,
  ICalculateCreditRequest,
} from "@entities/Credit/api/fetchCalculateCredit";

export const useCalculateCredit = (
  data: ICalculateCreditRequest
): UseQueryResult<ICalculateCreditResult> =>
  useQuery({
    queryFn: () => fetchCalculateCredit(data),
    queryKey: [EQueryKeys.CalculateCredit],
  });
