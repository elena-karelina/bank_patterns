import { FC } from "react";
import { CloseCircleOutlinedStyled, Wrapper } from "./BlockedTag.styles";

export const BlockedTag: FC = () => {
  return (
    <Wrapper>
      Blocked <CloseCircleOutlinedStyled />
    </Wrapper>
  );
};
