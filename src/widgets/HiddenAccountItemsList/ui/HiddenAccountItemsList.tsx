import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Collapse } from "antd";
import { useStores } from "@shared/contexts/stores";
import { AccountItem } from "@entities/Account/ui";
import { Divider } from "@shared/ui";

export const HiddenAccountItemsList: FC<{ className?: string }> = observer(
  ({ className }) => {
    const {
      accountStore: { hiddenAccountList },
    } = useStores();

    const items = (
      <div className={className}>
        {hiddenAccountList?.map((item, index) => (
          <div key={index}>
            <AccountItem data={item} isHidden={true} />
            {index < hiddenAccountList.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    );

    if (!hiddenAccountList || hiddenAccountList?.length < 1) {
      return null;
    }

    return (
      <Collapse
        className={className}
        items={[
          {
            key: "1",
            label: "Скрытые счета",
            children: items,
          },
        ]}
      />
    );
  }
);
