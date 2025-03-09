import { FC, useEffect } from "react";
import { AccountItem } from "@entities/Account/ui";
import { Divider, ItemListShimmer } from "@shared/ui";
import { useParams } from "react-router-dom";
import { AccountItemsListProps } from "./AccountItemsList.interfaces";
import { useAccountList } from "../hooks";
import { useStores } from "@shared/contexts/stores";

export const AccountItemsList: FC<AccountItemsListProps> = ({ className }) => {
  const { id } = useParams();
  const {
    accountStore: { setAccountList },
  } = useStores();
  const { status, data: accountItems } = useAccountList(id as string);

  console.log(status, accountItems);
  console.log(accountItems?.length === 0);

  useEffect(() => {
    if (accountItems) {
      setAccountList(accountItems);
    }
  }, [accountItems, setAccountList]);

  if (status === "pending") {
    return <ItemListShimmer />;
  }

  if (!accountItems || accountItems.length === 0) {
    return <div className={className}>счетов нет</div>;
  }
  return (
    <div className={className}>
      {accountItems?.map((item, index) => (
        <div key={index}>
          <AccountItem data={item} />
          {index < accountItems.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
};
