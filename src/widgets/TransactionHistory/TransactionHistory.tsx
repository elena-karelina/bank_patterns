import { Divider } from "@shared/ui";
import { TransactionHistoryElement } from "@widgets/TransactionHistoryElement";
import { FC } from "react";

export const TransactionHistory: FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={className}>
      <TransactionHistoryElement />
      <Divider />
      <TransactionHistoryElement />
    </div>
  );
};
