import { fetchBanUser } from "@entities/User/api";
import { handleError } from "@shared/api";
import { useMutation } from "@tanstack/react-query";

export const useBanUser = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (id: string) => fetchBanUser(id),
    onSuccess,
    onError: (error) => handleError(error),
  });
