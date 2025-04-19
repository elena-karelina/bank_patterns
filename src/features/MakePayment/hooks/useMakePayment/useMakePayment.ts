import { useMutation } from "@tanstack/react-query";

import { fetchMakePayment } from "@entities/Credit/api";
import { handleError } from "@shared/api";

export const useMakePayment = () =>
  useMutation({
    mutationFn: (id: string) => fetchMakePayment(id),
    onError: (error) => handleError(error),
  });
