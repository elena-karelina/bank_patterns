import { fetchCreateCredit, ICreateCreditRequest } from "@entities/Credit/api";
import { handleError } from "@shared/api";
import { useMutation } from "@tanstack/react-query";

export const useCreateCredit = () =>
  useMutation({
    mutationFn: (data: ICreateCreditRequest) => fetchCreateCredit(data),
    onError: (error) => handleError(error),
  });
