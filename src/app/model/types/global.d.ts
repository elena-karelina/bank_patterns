import { AccountStore } from "@entities/Account/models";
import { RateStore } from "@entities/Credit/model";
import { ThemeStore } from "@entities/Theme/models";
import { UserStore } from "@entities/User/models";

declare global {
  interface IStores {
    rateStore: RateStore;
    userStore: UserStore;
    // routingStore: RoutingStore;
    accountStore: AccountStore;
    themeStore: ThemeStore;
  }
}
