import { FC } from "react";
import { Icon, Wrapper, Block } from "./CreditItem.styles";
import { TitleStyled } from "@shared/ui";
import { ICreditItemProps } from "./CreditItem.interfaces";
import { useNavigate } from "react-router-dom";
import { useStores } from "@shared/contexts/stores";
import { CloseAccountButton } from "@widgets/CloseAccountButton";
import { observer } from "mobx-react-lite";
import { BlockedTag } from "@entities/Account/ui/BlockedTag";

export const CreditItem: FC<ICreditItemProps> = observer(({ data }) => {
  const navigate = useNavigate();
  const {
    creditStore: { setClickedCredit },
  } = useStores();

  const handleClick = (): void => {
    setClickedCredit(data);
    navigate(`/details/${data.id}`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Block>
        <TitleStyled level={4}>
          Кредит:{data.amount} P под {data.rate}%
        </TitleStyled>
        {data.status === "Closed" && <BlockedTag />}
      </Block>
      <div>
        {data.status !== "Closed" && <CloseAccountButton id={data.id} />}
        <Icon />
      </div>
    </Wrapper>
  );
});
