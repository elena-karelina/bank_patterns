import { observer } from "mobx-react-lite";
import { FC } from "react";
import meerkat from "../../../../public/logo.png";

import { MainPage } from "@pages/MainPage";
import { Image, Wrapper } from "./Page.styles";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccountDetailsPage } from "@pages/AccountDetailsPage";
import { PersonPage } from "@pages/PersonPage";
import { CreditDetailsPage } from "@pages/CreditDetailsPage";
import { ConfigProvider } from "antd";
import { useStores } from "@shared/contexts/stores";
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
          <Route path="/main" element={<MainPage />} />
          <Route path="/person/:id" element={<PersonPage />} />
          <Route path="/details/:id" element={<AccountDetailsPage />} />
          <Route path="/credit/:id" element={<CreditDetailsPage />} />
          <Route path="/signin-callback" element={<CallbackPage />} />
        </Routes>
        <Image src={meerkat} />
      </Wrapper>
    </ConfigProvider>
  );
});
