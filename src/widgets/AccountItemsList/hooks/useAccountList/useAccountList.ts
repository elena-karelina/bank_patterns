import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys } from "@shared/api";
import { IAccount } from "@entities/Account/models";
import { fetchAccountList } from "@entities/Account/api";

export const useAccountList = (id: string): UseQueryResult<IAccount[]> =>
  useQuery({
    queryFn: () => fetchAccountList(id),
    queryKey: [EQueryKeys.AccountList, id],
  });
