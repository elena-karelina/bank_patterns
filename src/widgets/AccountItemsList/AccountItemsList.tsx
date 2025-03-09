import { FC } from "react";
import { AccountItem } from "@entities/Account/ui";
import { Divider } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { LineShimmerStyled } from "./AccountItemsList.styles";
import { AccountItemsListProps } from "./AccountItemsList.interfaces";
import { useUserList } from "@entities/User/hooks";
import { EUserRole } from "@entities/User/models/types/index";

export const AccountItemsList: FC<AccountItemsListProps> = ({
  className,
  url,
}) => {
  const navigate = useNavigate();
  const { status, data: userList } = useUserList({ role: EUserRole.Client });
  console.log(status, userList);

  const handleClick = () => {
    navigate(url);
  };

  return (
    <div className={className}>
      <AccountItem onClick={handleClick} />
      <Divider />
      <AccountItem isBlocked={true} />
      <Divider />
      <LineShimmerStyled />
    </div>
  );
};
