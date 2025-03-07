import { FC } from "react";
import { AccountItem } from "@entities/Account/ui";
import { Divider } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { LineShimmerStyled } from "./AccountItemsList.styles";
import { AccountItemsListProps } from "./AccountItemsList.interfaces";

export const AccountItemsList: FC<AccountItemsListProps> = ({
  className,
  url,
}) => {
  const navigate = useNavigate();

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
