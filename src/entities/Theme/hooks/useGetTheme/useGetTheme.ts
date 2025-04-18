import { fetchGetTheme } from "@entities/Theme/api";
import { TTheme } from "@entities/Theme/models";
import { EQueryKeys } from "@shared/api";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetTheme = (): UseQueryResult<TTheme> =>
  useQuery({
    queryFn: () => fetchGetTheme(),
    queryKey: [EQueryKeys.GetTheme],
  });
