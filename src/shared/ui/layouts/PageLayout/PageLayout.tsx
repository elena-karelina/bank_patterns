import { FC } from "react";
import { TitleStyled, Wrapper } from "./PageLayout.styles";
import { IPageLayoutProps } from "./PageLayout.interfaces";

export const PageLayout: FC<IPageLayoutProps> = ({ children, title }) => {
  return (
    <Wrapper>
      <TitleStyled level={2}>{title}</TitleStyled>
      {children}
    </Wrapper>
  );
};
