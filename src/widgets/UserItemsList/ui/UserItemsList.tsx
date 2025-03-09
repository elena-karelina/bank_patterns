import { FC, useEffect } from "react";
import { Divider, ItemListShimmer } from "@shared/ui";
import { UserItemsListProps } from "./UserItemsList.interfaces";
import { useUserList } from "@entities/User/hooks";
import { UserItem } from "@entities/User/ui";
import { EUserRole } from "@entities/User/models";
import { useStores } from "@shared/contexts/stores";
import { observer } from "mobx-react-lite";

export const UserItemsList: FC<UserItemsListProps> = observer(
  ({ className }) => {
    const {
      userStore: { userList, setUserList },
    } = useStores();

    const { status, data: userItems } = useUserList({ role: EUserRole.Client });

    useEffect(() => {
      if (userItems) {
        setUserList(userItems);
      }
    }, [userItems, setUserList]);

    if (status === "pending") {
      return <ItemListShimmer />;
    }

    return (
      <div className={className}>
        {userList?.map((item, index) => (
          <div key={index}>
            <UserItem data={item} isEmployee={false} />
            {index < userList.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    );
  }
);
