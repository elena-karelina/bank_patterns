import { FC } from "react";
import { Icon, Wrapper, Block } from "./AccountItem.styles";
import { TitleStyled } from "@shared/ui";
import { IAccountItemProps } from "./AccountItem.interfaces";
import { useNavigate } from "react-router-dom";
import { useStores } from "@shared/contexts/stores";
import { BlockedTag } from "../BlockedTag";
import { CloseAccountButton } from "@widgets/CloseAccountButton";
import { observer } from "mobx-react-lite";

export const AccountItem: FC<IAccountItemProps> = observer(({ data }) => {
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
      <Block>
        <TitleStyled level={4}>{data.name}</TitleStyled>
        {data.status === "Closed" && <BlockedTag />}
      </Block>
      <div>
        {data.status !== "Closed" && <CloseAccountButton id={data.id} />}
        <Icon />
      </div>
    </Wrapper>
  );
});
