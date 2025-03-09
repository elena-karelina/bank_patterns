import { FC } from "react";
import { useMakePayment } from "../hooks/useMakePayment";
import { useParams } from "react-router-dom";
import { Button } from "antd";

export const MakePayment: FC<{ className?: string }> = ({ className }) => {
  const { mutate } = useMakePayment();
  const { id } = useParams();

  const handleClick = () => {
    mutate(id as string);
  };

  return (
    <Button type="primary" onClick={handleClick} className={className}>
      Провести списание
    </Button>
  );
};
