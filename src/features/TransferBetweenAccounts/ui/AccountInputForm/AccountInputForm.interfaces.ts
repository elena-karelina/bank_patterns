import { ITransferMoneyRates } from "@features/TransferBetweenAccounts/model";

export interface IAccountInputFormProps {
  onSubmit: (data: ITransferMoneyRates, accountTo: string) => void;
}
