import { RateStore } from "@entities/Credit/model";
import { UserStore } from "@entities/User/models";
import { RoutingStore } from "@shared/stores";

declare global {
  interface IStores {
    rateStore: RateStore;
    userStore: UserStore;
    routingStore: RoutingStore;
  }
}
