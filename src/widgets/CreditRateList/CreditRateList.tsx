import { FC } from "react";
import { CreditRateListProps } from "./CreditRateList.interfaces";
import { CreditRateItem } from "@entities/Credit/ui";
import { Divider } from "@shared/ui";
import { useCreditRateInfo } from "@entities/Credit/hooks";
import { ICredit } from "@entities/Credit/model";
import { CreditRateListShimmer } from "./CreditRateListShimmer";

const mock: ICredit[] = [
  {
    id: "sdd",
    name: "dgdgdg",
    rate: 12,
  },
  {
    id: "sqdd",
    name: "jdtgha",
    rate: 16,
  },
  {
    id: "sded",
    name: "vbgftheha",
    rate: 2,
  },
];

export const CreditRateList: FC<CreditRateListProps> = ({ className }) => {
  const { status, data: rateItems } = useCreditRateInfo();

  if (status === "pending") {
    return <CreditRateListShimmer />;
  }

  return (
    <div className={className}>
      {rateItems?.map((item, index) => (
        <div key={index}>
          <CreditRateItem name={item.name} rate={item.rate} />
          {index < mock.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
};
