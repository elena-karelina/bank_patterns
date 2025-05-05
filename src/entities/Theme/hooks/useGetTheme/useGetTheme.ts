import { fetchGetTheme } from "@entities/Theme/api";
import { TTheme } from "@entities/Theme/models";
import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { useCircuitBreaker } from "@shared/contexts";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetTheme = (): UseQueryResult<TTheme> => {
  const circuitBreaker = useCircuitBreaker();

  return useQuery({
    queryFn: () => fetchGetTheme(circuitBreaker),
    queryKey: [EQueryKeys.GetTheme],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
};
