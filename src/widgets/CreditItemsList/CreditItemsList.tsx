import { FC, useEffect } from "react";
import { Divider, ItemListShimmer } from "@shared/ui";
import { useStores } from "@shared/contexts/stores";
import { observer } from "mobx-react-lite";
import { useCreditList } from "@entities/Credit/hooks";
import { CreditItem } from "@entities/Credit/ui/CreditItem";

export const CreditItemsList: FC<{ className?: string }> = observer(
  ({ className }) => {
    const {
      creditStore: { creditList, setCreditList },
    } = useStores();
    const { status, data: creditItems } = useCreditList();
    console.log(creditItems);

    useEffect(() => {
      if (creditItems) {
        setCreditList(creditItems);
      }
    }, [creditItems, setCreditList]);

    if (status === "pending") {
      return <ItemListShimmer />;
    }

    if (!creditList || creditList.length === 0) {
      return <div className={className}>кредитов нет</div>;
    }

    return (
      <div className={className}>
        {creditList?.map((item, index) => (
          <div key={index}>
            <CreditItem data={item} />
            {index < creditList.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    );
  }
);
