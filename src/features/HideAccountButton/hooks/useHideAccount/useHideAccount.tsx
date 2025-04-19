import { fetchHideAccount } from "@entities/Account/api";
import { useMutation } from "@tanstack/react-query";
import { IUseHideAccountOptions } from "./useHideAccount.interfaces";
import { handleError } from "@shared/api";

export const useHideAccount = () =>
  useMutation({
    mutationFn: ({ id, isHide }: IUseHideAccountOptions) =>
      fetchHideAccount(id, isHide),
    onError: (error) => handleError(error),
  });
