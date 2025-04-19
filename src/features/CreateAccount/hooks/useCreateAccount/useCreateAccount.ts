import { useMutation } from "@tanstack/react-query";

import { fetchCreateAccount } from "@entities/Account/api";
import { handleError } from "@shared/api";

export const useCreateAccount = () =>
  useMutation({
    mutationFn: (name: string) => fetchCreateAccount(name),
    onError: (error) => handleError(error),
  });
