import { IFetchTransferMoneyToAccountOptions } from "@features/TransferBetweenAccounts/api";
import { handleError } from "@shared/api";
import { useMutation } from "@tanstack/react-query";
import { fetchTransferMoneyToAccount } from "../../api";

export const useTransferMoneyToAccount = () =>
  useMutation({
    mutationFn: (data: IFetchTransferMoneyToAccountOptions) =>
      fetchTransferMoneyToAccount(data),
    onError: (error) => handleError(error),
  });
