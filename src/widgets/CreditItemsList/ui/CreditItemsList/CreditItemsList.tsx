import { FC } from "react";
import { Divider, ItemListShimmer } from "@shared/ui";
import { observer } from "mobx-react-lite";
import { CreditItem } from "@entities/Credit/ui/CreditItem";
import { useParams } from "react-router-dom";
import { useCreditList } from "@widgets/CreditItemsList/hooks";

export const CreditItemsList: FC<{ className?: string }> = observer(
  ({ className }) => {
    const { id } = useParams();
    const { status, data: creditItems } = useCreditList(id as string);
    console.log(creditItems);

    if (status === "pending") {
      return <ItemListShimmer />;
    }

    if (!creditItems || creditItems.length === 0) {
      return <div className={className}>кредитов нет</div>;
    }

    return (
      <div className={className}>
        {creditItems?.map((item, index) => (
          <div key={index}>
            <CreditItem data={item} />
            {index < creditItems.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    );
  }
);
