import { observer } from "mobx-react-lite";
import { FC } from "react";
import meerkat from "../../../../public/logo.png";

import { MainPage } from "@pages/MainPage";
import { Image, Wrapper } from "./Page.styles";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccountDetailsPage } from "@pages/AccountDetailsPage";
import { CreditDetailsPage } from "@pages/CreditDetailsPage/ui";
import { useStores } from "@shared/contexts/stores";
import { ConfigProvider } from "antd";
import { EThemeAlgorithm } from "@entities/Theme/models";
import { CallbackPage } from "@pages/CallbackPage";

export const Page: FC = observer(() => {
  const {
    themeStore: { theme },
  } = useStores();

  return (
    <ConfigProvider
      theme={{
        algorithm: EThemeAlgorithm[theme],
        token: {
          colorPrimary: theme === "Light" ? "#6e450f" : "b87216",
        },
      }}
    >
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/signin-callback" element={<CallbackPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/details/:id" element={<AccountDetailsPage />} />
          <Route path="/credit/:id" element={<CreditDetailsPage />} />
        </Routes>
        <Image src={meerkat} />
        {/* <ThemeImage onClick={handleThemeClick} /> */}
      </Wrapper>
    </ConfigProvider>
  );
});
