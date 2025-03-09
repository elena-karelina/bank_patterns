import { useMutation } from "@tanstack/react-query";

import { fetchCreateAccount } from "@entities/Account/api";

export const useCreateAccount = () =>
  useMutation({
    mutationFn: (name: string) => fetchCreateAccount(name),
  });
