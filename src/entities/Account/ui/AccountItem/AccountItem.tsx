import { FC } from "react";
import {
  CloseCircleOutlinedStyled,
  Icon,
  TitleWrapper,
  Wrapper,
} from "./AccountItem.styles";
import { TitleStyled } from "../../../../shared/ui";
import { IAccountItemProps } from "./AccountItem.interfaces";

export const AccountItem: FC<IAccountItemProps> = ({
  onClick,
  isBlocked = false,
}) => {
  const handleClick = (): void => {
    onClick?.();
  };

  return (
    <Wrapper onClick={handleClick}>
      <TitleWrapper>
        <TitleStyled level={4}>SDS</TitleStyled>
        {isBlocked && <CloseCircleOutlinedStyled />}
      </TitleWrapper>

      <Icon />
    </Wrapper>
  );
};
