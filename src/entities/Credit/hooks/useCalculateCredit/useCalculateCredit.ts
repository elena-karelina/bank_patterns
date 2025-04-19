import { useMutation } from "@tanstack/react-query";

import {
  fetchCalculateCredit,
  ICalculateCreditRequest,
} from "@entities/Credit/api/fetchCalculateCredit";
import { handleError } from "@shared/api";

export const useCalculateCredit = () =>
  useMutation({
    mutationFn: (data: ICalculateCreditRequest) => fetchCalculateCredit(data),
    onError: (error) => handleError(error),
  });
