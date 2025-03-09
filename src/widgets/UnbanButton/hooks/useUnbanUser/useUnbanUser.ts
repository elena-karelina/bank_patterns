import { fetchUnbanUser } from "@entities/User/api";
import { useMutation } from "@tanstack/react-query";

export const useUnbanUser = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (id: string) => fetchUnbanUser(id),
    onSuccess,
  });
