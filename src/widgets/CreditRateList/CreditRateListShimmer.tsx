import { CreditRateItemShimmer } from "@entities/Credit/ui";
import { Divider } from "@shared/ui";
import { FC } from "react";

export const CreditRateListShimmer: FC = () => {
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index}>
          <CreditRateItemShimmer />
          {index < 2 && <Divider />}
        </div>
      ))}
    </>
  );
};
