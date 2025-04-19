import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys, handleError } from "@shared/api";
import { fetchHiddenAccountList } from "@entities/Account/api";

export const useHiddenAccountList = (): UseQueryResult<string[]> =>
  useQuery({
    queryFn: () => fetchHiddenAccountList(),
    queryKey: [EQueryKeys.HiddenAccontList],
    throwOnError: (error) => handleError(error),
  });
