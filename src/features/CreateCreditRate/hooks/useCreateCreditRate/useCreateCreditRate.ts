import { useMutation } from "@tanstack/react-query";

import { fetchCreateCreditRate } from "@entities/Credit/api";
import { ICreateCredit } from "@entities/Credit/model";
import { handleError } from "@shared/api";

export const useCreateCreditRate = () =>
  useMutation({
    mutationFn: (data: ICreateCredit) => fetchCreateCreditRate(data),
    onError: (error) => handleError(error),
  });
