import { Page } from "../Page";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoresProvider } from "@shared/contexts/stores";
import { RateStore } from "@entities/Credit/model";
import { UserStore } from "@entities/User/models/store/UserStore";
import { AccountStore } from "@entities/Account/models";
import { ThemeStore } from "@entities/Theme/models";
import { CircuitBreakerProvider } from "@shared/contexts";

export const App = () => {
  const queryClient = new QueryClient();
  const rateStore = new RateStore();
  const userStore = new UserStore();
  const accountStore = new AccountStore();
  const themeStore = new ThemeStore();
  // const routingStore = new RoutingStore();

  const stores = {
    rateStore,
    userStore,
    accountStore,
    themeStore,
    // routingStore,
  };

  return (
    <StoresProvider stores={stores}>
      <QueryClientProvider client={queryClient}>
        <CircuitBreakerProvider>
          <BrowserRouter basename="/">
            <Page />
          </BrowserRouter>
        </CircuitBreakerProvider>
      </QueryClientProvider>
    </StoresProvider>
  );
};
