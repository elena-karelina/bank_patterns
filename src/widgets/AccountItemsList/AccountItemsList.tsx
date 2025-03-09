import { FC, useEffect } from "react";
import { AccountItem } from "@entities/Account/ui";
import { Divider, ItemListShimmer } from "@shared/ui";
import { useAccountList } from "@entities/Account/hooks";
import { useStores } from "@shared/contexts/stores";
import { observer } from "mobx-react-lite";

export const AccountItemsList: FC<{ className?: string }> = observer(
  ({ className }) => {
    const {
      accountStore: { accountList, setAccountList },
    } = useStores();
    const { status, data: accountItems } = useAccountList();
    console.log(accountItems);

    useEffect(() => {
      if (accountItems) {
        setAccountList(accountItems);
      }
    }, [accountItems, setAccountList]);

    if (status === "pending") {
      return <ItemListShimmer />;
    }

    if (!accountList || accountList.length === 0) {
      return <div className={className}>счетов нет</div>;
    }

    return (
      <div className={className}>
        {accountList?.map((item, index) => (
          <div key={index}>
            <AccountItem data={item} />
            {index < accountList.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    );
  }
);
