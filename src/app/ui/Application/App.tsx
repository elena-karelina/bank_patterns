import { ConfigProvider } from "antd";
import { Page } from "../Page";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    // <StoresProvider stores={stores}>
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
    // </StoresProvider>
  );
};
