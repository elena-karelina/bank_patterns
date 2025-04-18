import { AccountStore } from "@entities/Account/models";
import { CreditStore } from "@entities/Credit/model/store";
import { ThemeStore } from "@entities/Theme/models";
import { UserStore } from "@entities/User/models";

declare global {
  interface IStores {
    accountStore: AccountStore;
    creditStore: CreditStore;
    themeStore: ThemeStore;
    userStore: UserStore;
  }
}
