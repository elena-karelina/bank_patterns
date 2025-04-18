import { fetchChangeTheme } from "@entities/Theme/api";
import { TTheme } from "@entities/Theme/models";
import { useMutation } from "@tanstack/react-query";

export const useChangeTheme = () =>
  useMutation({
    mutationFn: (theme: TTheme) => fetchChangeTheme(theme),
  });
