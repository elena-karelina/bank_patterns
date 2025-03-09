import { IAccount } from "@entities/Account/models";

export interface IAccountItemProps {
  onClick?: () => void;
  data: IAccount;
}
