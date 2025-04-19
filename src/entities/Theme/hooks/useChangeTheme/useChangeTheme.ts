import { fetchChangeTheme } from "@entities/Theme/api";
import { TTheme } from "@entities/Theme/models";
import { handleError } from "@shared/api";
import { useMutation } from "@tanstack/react-query";

export const useChangeTheme = () =>
  useMutation({
    mutationFn: (theme: TTheme) => fetchChangeTheme(theme),
    onError: (error) => handleError(error),
  });
