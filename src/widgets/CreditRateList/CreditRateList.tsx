import { FC } from "react";
import { CreditRateListProps } from "./CreditRateList.interfaces";
import { CreditRateItem } from "@entities/Credit/ui";
import { Divider } from "@shared/ui";
import { useCreditRateInfo } from "@entities/Credit/hooks";
import { CreditRateListShimmer } from "./CreditRateListShimmer";

export const CreditRateList: FC<CreditRateListProps> = ({
  className,
  formData,
}) => {
  const { status, data: rateItems } = useCreditRateInfo();

  if (status === "pending") {
    return <CreditRateListShimmer />;
  }

  return (
    <div className={className}>
      {rateItems?.map((item, index) => (
        <div key={index}>
          <CreditRateItem
            name={item.name}
            rate={item.yearlyRate}
            id={item.id}
            formData={formData}
          />
          {index < rateItems.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
};
