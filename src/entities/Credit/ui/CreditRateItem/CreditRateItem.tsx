import { FC, useState } from "react";
import { Calculations, Row, Wrapper } from "./CreditRateItem.styles";
import { TitleStyled } from "@shared/ui";
import { ICreditRateItemProps } from "./CreditRateItem.interfaces";
import { Button, Form } from "antd";
import { useCalculateCredit } from "@entities/Credit/hooks/useCalculateCredit";
import { ICalculateCreditResult } from "@entities/Credit/model";

export const CreditRateItem: FC<ICreditRateItemProps> = (props) => {
  const { name, rate, id, formData } = props;
  const { mutate } = useCalculateCredit();
  const [totalAmount, setTotalAmount] = useState<number | undefined>();
  const [dailyPayment, setDailyPayment] = useState<number | undefined>();

  const handleClick = () => {
    console.log({ ...formData }, id);
    if (formData) {
      mutate(
        { ...formData, rateId: id },
        {
          onSuccess: (data: ICalculateCreditResult) => {
            setTotalAmount(data.totalAmount);
            setDailyPayment(data.dailyPayment);
          },
          onError: (error) => {
            console.error("Ошибка:", error);
          },
        }
      );
    }
  };

  return (
    <Wrapper>
      <Row>
        <TitleStyled level={4}>{name}</TitleStyled>

        <TitleStyled level={4}>{rate}%</TitleStyled>
      </Row>
      <Row>
        <Calculations>
          {dailyPayment && <span>Ежедневный платеж: {dailyPayment}</span>}
          {totalAmount && <span>Общая сумма: {totalAmount}</span>}
        </Calculations>

        <Form.Item label={null} style={{ margin: 0 }}>
          <Button type="primary" htmlType="submit" onClick={handleClick}>
            Расчитать
          </Button>
        </Form.Item>
      </Row>
    </Wrapper>
  );
};
