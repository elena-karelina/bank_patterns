import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import {
  AccountItemsListStyled,
  HiddenAccountItemsListStyled,
} from "./AccountListPage.styles";
import { ItemListShimmer } from "@shared/ui";
import { useAccountList } from "@entities/Account/hooks";
import { useStores } from "@shared/contexts/stores";
import { useHiddenAccountList } from "@entities/Account/hooks";

export const AccountListPage: FC<{ className?: string }> = observer(
  ({ className }) => {
    const {
      accountStore: {
        accountList,
        setAccountList,
        addHiddenAccount,
        addVisibleAccount,
      },
    } = useStores();

    const { status: accountStatus, data: accountItems } = useAccountList();
    const { status: hiddenAccountStatus, data: hiddenAccountItems } =
      useHiddenAccountList();

    console.log(accountItems, hiddenAccountItems);

    useEffect(() => {
      if (accountItems && hiddenAccountItems) {
        setAccountList(accountItems);

        accountItems.map((account) => {
          if (hiddenAccountItems.includes(account.id)) {
            addHiddenAccount(account);
          } else {
            addVisibleAccount(account);
          }
        });
      }
    }, [accountItems, hiddenAccountItems]);

    if (accountStatus === "pending" || hiddenAccountStatus === "pending") {
      return <ItemListShimmer />;
    }

    if (hiddenAccountStatus === "error") {
      return <div className={className}>что-то пошло не так</div>;
    }

    if (!accountList || accountList.length === 0) {
      return <div className={className}>счетов нет</div>;
    }
    return (
      <>
        <AccountItemsListStyled />
        <HiddenAccountItemsListStyled />
      </>
    );
  }
);
