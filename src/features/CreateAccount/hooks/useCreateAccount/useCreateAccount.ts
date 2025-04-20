import { useMutation } from "@tanstack/react-query";

import { fetchCreateAccount } from "@entities/Account/api";
import { handleError } from "@shared/api";
import { ECurrencies } from "@shared/types";

export const useCreateAccount = () =>
  useMutation({
    mutationFn: ({ name, currency }: { name: string; currency: ECurrencies }) =>
      fetchCreateAccount(name, currency),
    onError: (error) => handleError(error),
  });
