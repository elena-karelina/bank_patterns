import { FC } from "react";
import { Wrapper } from "./CreditRateItem.styles";
import { TitleStyled } from "@shared/ui";
import { ICreditRateItemProps } from "./CreditRateItem.interfaces";

export const CreditRateItem: FC<ICreditRateItemProps> = ({ name, rate }) => {
  return (
    <Wrapper>
      <TitleStyled level={4}>{name}</TitleStyled>

      <TitleStyled level={4}>{rate}%</TitleStyled>
    </Wrapper>
  );
};
