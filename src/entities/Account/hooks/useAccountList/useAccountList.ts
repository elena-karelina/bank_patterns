import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys } from "@shared/api";
import { fetchAccountList } from "@entities/Account/api/fetchAccountList";
import { IAccount } from "@entities/Account/models";

export const useAccountList = (): UseQueryResult<IAccount[]> =>
  useQuery({
    queryFn: fetchAccountList,
    queryKey: [EQueryKeys.AccontList],
  });
