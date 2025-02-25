import { ConfigProvider } from "antd";
import { Page } from "../Page";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    // <StoresProvider stores={stores}>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#6e450f",
        },
      }}
    >
      <BrowserRouter basename="/">
        <Page />
      </BrowserRouter>
    </ConfigProvider>
    // </StoresProvider>
  );
}

export default App;
