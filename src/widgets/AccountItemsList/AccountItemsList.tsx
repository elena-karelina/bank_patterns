import { FC } from "react";
import { AccountItem } from "@entities/Account/ui";
import { Divider } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { LineShimmerStyled } from "./AccountItemsList.styles";

export const AccountItemsList: FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details");
  };
  return (
    <div className={className}>
      <AccountItem onClick={handleClick} />
      <Divider />
      <AccountItem />
      <Divider />
      <LineShimmerStyled />
    </div>
  );
};
