import { FC } from "react";
import { AccountItem } from "@entities/Account/ui";
import { Divider, ItemListShimmer } from "@shared/ui";
import { useNavigate, useParams } from "react-router-dom";
import { AccountItemsListProps } from "./AccountItemsList.interfaces";
import { useAccountList } from "../hooks";

export const AccountItemsList: FC<AccountItemsListProps> = ({
  className,
  url,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { status, data: accountList } = useAccountList(id as string);

  console.log(status, accountList);
  console.log(accountList?.length === 0);

  const handleClick = () => {
    navigate(url);
  };

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
          <AccountItem data={item} onClick={handleClick} />
          {index < accountList.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
};
