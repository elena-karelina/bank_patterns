import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { fetchHiddenAccountList } from "@entities/Account/api";

export const useHiddenAccountList = (): UseQueryResult<string[]> =>
  useQuery({
    queryFn: () => fetchHiddenAccountList(),
    queryKey: [EQueryKeys.HiddenAccontList],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
