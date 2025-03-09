import { ConfigProvider } from "antd";
import { Page } from "../Page";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoresProvider } from "@shared/contexts/stores";
import { RateStore } from "@entities/Credit/model";
import { UserStore } from "@entities/User/models/store/UserStore";
import { AccountStore } from "@entities/Account/models";

export const App = () => {
  const queryClient = new QueryClient();
  const rateStore = new RateStore();
  const userStore = new UserStore();
  const accountStore = new AccountStore();

  const stores = {
    rateStore,
    userStore,
    accountStore,
  };

  return (
    <StoresProvider stores={stores}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#6e450f",
            },
          }}
        >
          <BrowserRouter basename="/">
            <Page />
          </BrowserRouter>
        </ConfigProvider>
      </QueryClientProvider>
    </StoresProvider>
  );
};
