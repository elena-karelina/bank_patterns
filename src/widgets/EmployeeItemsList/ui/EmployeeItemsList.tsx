import { FC, useEffect } from "react";
import { Divider, ItemListShimmer } from "@shared/ui";
import { EmployeeItemsListProps } from "./EmployeeItemsList.interfaces";
import { useUserList } from "@entities/User/hooks";
import { UserItem } from "@entities/User/ui";
import { EUserRole } from "@entities/User/models";
import { observer } from "mobx-react-lite";
import { useStores } from "@shared/contexts/stores";

export const EmployeeItemsList: FC<EmployeeItemsListProps> = observer(
  ({ className }) => {
    const {
      userStore: { employeeList, setEmployeeList },
    } = useStores();
    const { status, data: employeeItems } = useUserList({
      role: EUserRole.Employee,
    });

    useEffect(() => {
      if (employeeItems) {
        setEmployeeList(employeeItems);
      }
    }, [employeeItems, setEmployeeList]);

    if (status === "pending") {
      return <ItemListShimmer />;
    }

    return (
      <div className={className}>
        {employeeList?.map((item, index) => (
          <div key={index}>
            <UserItem data={item} isEmployee={true} />
            {index < employeeList.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    );
  }
);
