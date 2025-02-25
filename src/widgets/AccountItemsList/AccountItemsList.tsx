import { FC } from "react";
import { AccountItem } from "@entities/Account/ui";
import { Divider } from "@shared/ui";

export const AccountItemsList: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <AccountItem />
      <Divider />
      <AccountItem />
      <Divider />
      <AccountItem />
    </div>
  );
};
