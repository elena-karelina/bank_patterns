import { Button } from "antd";
import { ReactElement } from "react";
import { IBanButtomProps } from "./BanButton.interfaces";

export const BanButton = ({ onClick }: IBanButtomProps): ReactElement => {
  return (
    <Button color="danger" variant="outlined" onClick={onClick}>
      Забанить
    </Button>
  );
};
