import { useCreditRating } from "@entities/Credit/hooks";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { CreditItemsListStyled } from "./CreditPage.styles";

export const CreditPage: FC<{ className?: string }> = observer(
  ({ className }) => {
    const { status, data: rating } = useCreditRating();
    if (status === "error") {
      return null;
    }
    return (
      <div className={className}>
        <span>Кредитный рейтинг: {rating}</span>
        <CreditItemsListStyled />
      </div>
    );
  }
);
