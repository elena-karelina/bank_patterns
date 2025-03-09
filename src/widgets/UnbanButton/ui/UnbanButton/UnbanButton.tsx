import { Button } from "antd";
import { ReactElement } from "react";
import { IBanButtomProps } from "./UnbanButton.interfaces";

export const UnbanButton = ({ onClick }: IBanButtomProps): ReactElement => {
  return (
    <Button color="cyan" variant="outlined" onClick={onClick}>
      Разбанить
    </Button>
  );
};
