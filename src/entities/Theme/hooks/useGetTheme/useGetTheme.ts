import { fetchGetTheme } from "@entities/Theme/api";
import { TTheme } from "@entities/Theme/models";
import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetTheme = (): UseQueryResult<TTheme> =>
  useQuery({
    queryFn: () => fetchGetTheme(),
    queryKey: [EQueryKeys.GetTheme],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
