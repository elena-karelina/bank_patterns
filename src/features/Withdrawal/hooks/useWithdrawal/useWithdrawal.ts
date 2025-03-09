import { fetchWithdrawal } from "@entities/Transaction/api";
import { useMutation } from "@tanstack/react-query";

export const useWithdrawal = () =>
  useMutation({
    mutationFn: ({ id, amount }: { id: string; amount: number }) =>
      fetchWithdrawal({ id, amount }),
  });
