import { FC, useState } from "react";
import { Icon, BlockWrapper, Wrapper } from "./UserItem.styles";
import { TitleStyled } from "../../../../../shared/ui";
import { BlockedTag } from "../BlockedTag";
import { BanButton } from "@widgets/BanButton";
import { useBanUser } from "@widgets/BanButton/hooks";
import { useStores } from "@shared/contexts/stores";
import { UnbanButton } from "@widgets/UnbanButton";
import { useUnbanUser } from "@widgets/UnbanButton/hooks";
import { useNavigate } from "react-router-dom";
import { IUserItemProps } from "./UserItem.interfaces";

export const UserItem: FC<IUserItemProps> = ({ data, isEmployee }) => {
  const { isBanned, fullName, id } = data;
  const [isBan, setIsBan] = useState(isBanned);
  const navigate = useNavigate();
  const {
    userStore: { banPerson, unbanPerson, setClickedPerson },
  } = useStores();

  const handleBanSuccess = () => {
    banPerson(id);
    setIsBan(true);
    console.log("ban", isBan);
  };

  const handleUnbanSuccess = () => {
    unbanPerson(id);
    setIsBan(false);
    console.log("unban", isBan);
  };

  const { mutate: unbanRefetch } = useUnbanUser(handleUnbanSuccess);
  const { mutate: banRefetch } = useBanUser(handleBanSuccess);

  const handleClick = (): void => {
    setClickedPerson(data);
    navigate(`/person/${id}`);
  };

  const handleBanClick = (event: React.MouseEvent): void => {
    event.stopPropagation();
    banRefetch(id);
  };

  const handleUnbanClick = (event: React.MouseEvent): void => {
    event.stopPropagation();
    unbanRefetch(id);
  };

  return (
    <Wrapper onClick={isEmployee ? null : handleClick} id={id}>
      <BlockWrapper>
        <TitleStyled level={4}>{fullName}</TitleStyled>
        {isBan && <BlockedTag />}
      </BlockWrapper>
      <BlockWrapper>
        {isBan ? (
          <UnbanButton onClick={handleUnbanClick} />
        ) : (
          <BanButton onClick={handleBanClick} />
        )}
        {!isEmployee && <Icon />}
      </BlockWrapper>
    </Wrapper>
  );
};
