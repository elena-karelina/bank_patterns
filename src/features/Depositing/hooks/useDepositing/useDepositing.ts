import { fetchDepositing } from "@entities/Transaction/api";
import { handleError } from "@shared/api";
import { useMutation } from "@tanstack/react-query";

export const useDepositing = () =>
  useMutation({
    mutationFn: ({ id, amount }: { id: string; amount: number }) =>
      fetchDepositing({ id, amount }),
    onError: (error) => handleError(error),
  });
