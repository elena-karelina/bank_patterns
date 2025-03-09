import { Button } from "antd";
import { ReactElement } from "react";
import { useCloseAccount } from "../../hooks";
import { useStores } from "@shared/contexts/stores";
import { ICloseAccountButtonProps } from "./CloseAccountButton.interfaces";

export const CloseAccountButton = ({
  id,
}: ICloseAccountButtonProps): ReactElement => {
  const { mutate } = useCloseAccount();
  const {
    accountStore: { closeAccount },
  } = useStores();

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    mutate(id, {
      onSuccess: () => {
        closeAccount(id);
        console.log("счет закрыт");
      },
      onError: (error) => {
        console.error("Ошибка:", error);
      },
    });
  };
  return (
    <Button color="danger" variant="outlined" onClick={handleClick}>
      Закрыть
    </Button>
  );
};
