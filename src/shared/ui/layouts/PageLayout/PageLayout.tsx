import { FC } from "react";
import {
  NavigationHomeStyled,
  TitleStyled,
  Wrapper,
} from "./PageLayout.styles";
import { IPageLayoutProps } from "./PageLayout.interfaces";

export const PageLayout: FC<IPageLayoutProps> = ({
  children,
  title,
  withNavigationHome,
}) => {
  return (
    <Wrapper>
      {withNavigationHome && <NavigationHomeStyled />}
      <TitleStyled level={2}>{title}</TitleStyled>
      {children}
    </Wrapper>
  );
};
