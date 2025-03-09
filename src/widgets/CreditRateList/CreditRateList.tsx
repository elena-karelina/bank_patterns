import { FC, useEffect } from "react";
import { CreditRateListProps } from "./CreditRateList.interfaces";
import { CreditRateItem } from "@entities/Credit/ui";
import { Divider } from "@shared/ui";
import { useCreditRateInfo } from "@entities/Credit/hooks";
import { CreditRateListShimmer } from "./CreditRateListShimmer";
import { useStores } from "@shared/contexts/stores";
import { observer } from "mobx-react-lite";

export const CreditRateList: FC<CreditRateListProps> = observer(
  ({ className }) => {
    const {
      rateStore: { rateList, setRateList },
    } = useStores();
    const { status, data: rateItems } = useCreditRateInfo();

    useEffect(() => {
      if (rateItems) {
        setRateList(rateItems);
      }
    }, [rateItems, setRateList]);

    if (status === "pending") {
      return <CreditRateListShimmer />;
    }

    console.log(rateItems);
    return (
      <div className={className}>
        {rateList?.map((item, index) => (
          <div key={index}>
            <CreditRateItem name={item.name} rate={item.yearlyRate} />
            {index < rateList.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    );
  }
);
