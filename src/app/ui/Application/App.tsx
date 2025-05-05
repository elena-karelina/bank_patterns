import { Page } from "../Page";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@ant-design/v5-patch-for-react-19";
import { AccountStore } from "@entities/Account/models";
import { StoresProvider } from "@shared/contexts/stores";
import { CreditStore } from "@entities/Credit/model/store";
import { ThemeStore } from "@entities/Theme/models";
import { UserStore } from "@entities/User/models";
import { CircuitBreakerProvider } from "@shared/contexts";

export const App = () => {
  const queryClient = new QueryClient();
  const accountStore = new AccountStore();
  const creditStore = new CreditStore();
  const themeStore = new ThemeStore();
  const userStore = new UserStore();

  const stores = {
    accountStore,
    creditStore,
    themeStore,
    userStore,
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
