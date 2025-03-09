import { ConfigProvider } from "antd";
import { Page } from "../Page";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@ant-design/v5-patch-for-react-19";
import { AccountStore } from "@entities/Account/models";
import { StoresProvider } from "@shared/contexts/stores";

export const App = () => {
  const queryClient = new QueryClient();
  const accountStore = new AccountStore();

  const stores = {
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
