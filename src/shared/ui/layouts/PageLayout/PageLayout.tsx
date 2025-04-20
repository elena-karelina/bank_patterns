import { FC } from "react";
import {
  Logout,
  Row,
  ThemeImage,
  TitleStyled,
  Wrapper,
} from "./PageLayout.styles";
import { IPageLayoutProps } from "./PageLayout.interfaces";

import { useStores } from "@shared/contexts/stores";
import { useChangeTheme } from "@entities/Theme/hooks";
import { TTheme } from "@entities/Theme/models";
import { logoutRedirect } from "@shared/utils";

export const PageLayout: FC<IPageLayoutProps> = ({ children, title }) => {
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

  const handleLogoutClick = () => {
    logoutRedirect();
    localStorage.removeItem("userToken");
  };

  return (
    <>
      <Row>
        <Logout onClick={handleLogoutClick}>Выйти</Logout>
        <ThemeImage onClick={handleThemeClick} />
      </Row>
      <Wrapper>
        {/* {withNavigationHome && <NavigationHomeStyled />} */}
        <TitleStyled level={2}>{title}</TitleStyled>
        {children}
      </Wrapper>
    </>
  );
};
