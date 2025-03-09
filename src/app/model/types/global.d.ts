import { AccountStore } from "@entities/Account/models";

declare global {
  interface IStores {
    accountStore: AccountStore;
  }
}
