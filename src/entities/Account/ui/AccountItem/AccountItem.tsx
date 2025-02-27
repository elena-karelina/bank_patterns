import { FC } from "react";
import { Icon, Wrapper } from "./AccountItem.styles";
import { TitleStyled } from "../../../../shared/ui";
import { IAccountItemProps } from "./AccountItem.interfaces";

export const AccountItem: FC<IAccountItemProps> = ({ onClick }) => {
  const handleClick = (): void => {
    onClick?.();
  };

  return (
    <Wrapper onClick={handleClick}>
      <TitleStyled level={4}>SDS</TitleStyled>
      <Icon />
    </Wrapper>
  );
};
