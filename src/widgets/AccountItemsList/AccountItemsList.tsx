import { FC } from "react";
import { AccountItem } from "@entities/Account/ui";
import { Divider } from "@shared/ui";
import { useStores } from "@shared/contexts/stores";
import { observer } from "mobx-react-lite";

export const AccountItemsList: FC<{ className?: string }> = observer(
  ({ className }) => {
    const {
      accountStore: { visibleAccountList },
    } = useStores();
    visibleAccountList?.map((item) => {
      console.log(item.name, item.status);
    });

    return (
      <div className={className}>
        {visibleAccountList?.map((item, index) => (
          <div key={index}>
            <AccountItem data={item} isHidden={false} />
            {index < visibleAccountList.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    );
  }
);
