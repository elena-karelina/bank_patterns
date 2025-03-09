import { FC } from "react";
import { Icon, Wrapper } from "./AccountItem.styles";
import { TitleStyled } from "../../../../shared/ui";
import { IAccountItemProps } from "./AccountItem.interfaces";
import { useNavigate } from "react-router-dom";
import { useStores } from "@shared/contexts/stores";

export const AccountItem: FC<IAccountItemProps> = ({ data }) => {
  const navigate = useNavigate();
  const {
    accountStore: { setClickedAccount },
  } = useStores();
  const handleClick = (): void => {
    setClickedAccount(data);
    navigate(`/details/${data.id}`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <TitleStyled level={4}>{data.name}</TitleStyled>
      <Icon />
    </Wrapper>
  );
};
