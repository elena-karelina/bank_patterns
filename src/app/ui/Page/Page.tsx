import { observer } from "mobx-react-lite";
import { FC } from "react";
import meerkat from "../../../../public/logo.png";

import { MainPage } from "@pages/MainPage";
import { Image, ThemeImage, Wrapper } from "./Page.styles";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccountDetailsPage } from "@pages/AccountDetailsPage";
import { LoginPage } from "@pages/LoginPage";
import { CreditDetailsPage } from "@pages/CreditDetailsPage/ui";
import { useStores } from "@shared/contexts/stores";
import { ConfigProvider } from "antd";
import { EThemeAlgorithm, TTheme } from "@entities/Theme/models";
import { useChangeTheme } from "@entities/Theme/hooks";

export const Page: FC = observer(() => {
  const {
    themeStore: { theme, setTheme },
  } = useStores();

  const { mutate } = useChangeTheme();

  const handleThemeClick = () => {
    const newTheme: TTheme = theme === "Light" ? "Dark" : "Light";
    mutate(newTheme, {
      onSuccess: () => {
        setTheme(newTheme);
      },
      onError: (error) => {
        console.error("Ошибка:", error);
      },
    });
  };

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
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/details/:id" element={<AccountDetailsPage />} />
          <Route path="/credit/:id" element={<CreditDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Image src={meerkat} />
        <ThemeImage onClick={handleThemeClick} />
      </Wrapper>
    </ConfigProvider>
  );
});
