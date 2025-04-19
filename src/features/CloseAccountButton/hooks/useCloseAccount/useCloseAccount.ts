import { fetchCloseAccount } from "@entities/Account/api";
import { handleError } from "@shared/api";
import { useMutation } from "@tanstack/react-query";

export const useCloseAccount = () =>
  useMutation({
    mutationFn: (id: string) => fetchCloseAccount(id),
    onError: (error) => handleError(error),
  });
