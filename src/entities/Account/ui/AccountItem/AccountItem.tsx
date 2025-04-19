import { FC } from "react";
import { Icon, Wrapper, Block } from "./AccountItem.styles";
import { TitleStyled } from "@shared/ui";
import { IAccountItemProps } from "./AccountItem.interfaces";
import { useNavigate } from "react-router-dom";
import { useStores } from "@shared/contexts/stores";
import { ClosedTag } from "../ClosedTag";
import { observer } from "mobx-react-lite";
import { CloseAccountButton } from "@features/CloseAccountButton";
import { HideAccountButton } from "@features/HideAccountButton";

export const AccountItem: FC<IAccountItemProps> = observer(
  ({ data, isHidden }) => {
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
          <HideAccountButton id={data.id} isHidden={isHidden} />
          {data.status === "Closed" && <ClosedTag />}
        </Block>
        <div>
          {data.status !== "Closed" && <CloseAccountButton id={data.id} />}
          <Icon />
        </div>
      </Wrapper>
    );
  }
);
