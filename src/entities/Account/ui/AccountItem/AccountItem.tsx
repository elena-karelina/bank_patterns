import { FC } from "react";
import { Icon, TitleWrapper, Wrapper } from "./AccountItem.styles";
import { TitleStyled } from "../../../../shared/ui";
import { IAccountItemProps } from "./AccountItem.interfaces";
import { ClosedTag } from "../ClosedTag";

export const AccountItem: FC<IAccountItemProps> = ({ onClick, data }) => {
  const handleClick = (): void => {
    onClick?.();
  };

  return (
    <Wrapper onClick={handleClick}>
      <TitleWrapper>
        <TitleStyled level={4}>{data.name}</TitleStyled>
        {data.status === "Closed" && <ClosedTag />}
      </TitleWrapper>

      <Icon />
    </Wrapper>
  );
};
