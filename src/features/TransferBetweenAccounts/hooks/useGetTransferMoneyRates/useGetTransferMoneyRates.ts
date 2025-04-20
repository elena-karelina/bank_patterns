import {
  fetchGetTransferMoneyRates,
  IFetchGetTransferMoneyRatesOptions,
} from "@features/TransferBetweenAccounts/api";
import { handleError } from "@shared/api";
import { useMutation } from "@tanstack/react-query";

export const useGetTransferMoneyRates = () =>
  useMutation({
    mutationFn: (data: IFetchGetTransferMoneyRatesOptions) =>
      fetchGetTransferMoneyRates(data),
    onError: (error) => handleError(error),
  });
