import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { FC } from "react";
import { HideAccountButtonStyled } from "./HideAccountButton.style";
import { useStores } from "@shared/contexts/stores";
import { IHideAccountButtonProps } from "./HideAccountButton.interfaces";
import { useHideAccount } from "../hooks";

export const HideAccountButton: FC<IHideAccountButtonProps> = ({
  id,
  isHidden,
}) => {
  const {
    accountStore: { hideAccount, showAccount },
  } = useStores();
  const { mutate } = useHideAccount();

  const toggleHidden = (e: React.MouseEvent) => {
    e.stopPropagation();

    mutate(
      { id, isHide: !isHidden },
      {
        onSuccess: () => {
          if (isHidden) {
            showAccount(id);
          } else {
            hideAccount(id);
          }
        },
        onError: (error) => {
          console.error("Ошибка:", error);
        },
      }
    );
  };

  return (
    <HideAccountButtonStyled onClick={toggleHidden}>
      {isHidden ? <EyeInvisibleOutlined /> : <EyeOutlined />}
    </HideAccountButtonStyled>
  );
};
