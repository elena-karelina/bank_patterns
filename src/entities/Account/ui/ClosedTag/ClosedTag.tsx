import { FC } from "react";
import { CloseCircleOutlinedStyled, Wrapper } from "./ClosedTag.styles";

export const ClosedTag: FC = () => {
  return (
    <Wrapper>
      Закрыт <CloseCircleOutlinedStyled />
    </Wrapper>
  );
};
