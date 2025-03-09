import { AccountStore } from "@entities/Account/models";
import { CreditStore } from "@entities/Credit/model/store";

declare global {
  interface IStores {
    accountStore: AccountStore;
    creditStore: CreditStore;
  }
}
