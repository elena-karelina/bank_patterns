import { FC } from "react";
import { Icon, Wrapper, Block } from "./CreditItem.styles";
import { TitleStyled } from "@shared/ui";
import { ICreditItemProps } from "./CreditItem.interfaces";
import { useNavigate } from "react-router-dom";
import { useStores } from "@shared/contexts/stores";
import { observer } from "mobx-react-lite";

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
          {data.amount} р под {data.rate}%
        </TitleStyled>
      </Block>
      <div>
        <Icon />
      </div>
    </Wrapper>
  );
});
