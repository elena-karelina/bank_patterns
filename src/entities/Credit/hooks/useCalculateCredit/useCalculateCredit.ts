import { useMutation } from "@tanstack/react-query";

import {
  fetchCalculateCredit,
  ICalculateCreditRequest,
} from "@entities/Credit/api/fetchCalculateCredit";

export const useCalculateCredit = () =>
  useMutation({
    mutationFn: (data: ICalculateCreditRequest) => fetchCalculateCredit(data),
  });
