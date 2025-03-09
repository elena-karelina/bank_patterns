import { useMutation } from "@tanstack/react-query";

import { fetchMakePayment } from "@entities/Credit/api";

export const useMakePayment = () =>
  useMutation({
    mutationFn: (id: string) => fetchMakePayment(id),
  });
