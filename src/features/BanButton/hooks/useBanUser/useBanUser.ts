import { fetchBanUser } from "@entities/User/api";
import { useMutation } from "@tanstack/react-query";

export const useBanUser = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (id: string) => fetchBanUser(id),
    onSuccess,
  });
