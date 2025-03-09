import { FC } from "react";
import { Icon, TitleWrapper, Wrapper } from "./AccountItem.styles";
import { TitleStyled } from "../../../../shared/ui";
import { IAccountItemProps } from "./AccountItem.interfaces";
import { ClosedTag } from "../ClosedTag";
import { useNavigate } from "react-router-dom";
import { useStores } from "@shared/contexts/stores";

export const AccountItem: FC<IAccountItemProps> = ({ data }) => {
  const navigate = useNavigate();
  const {
    accountStore: { setClickedAccount },
  } = useStores();

  const handleClick = () => {
    setClickedAccount(data);
    navigate(`/details/${data.id}`);
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
