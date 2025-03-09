import { FC } from "react";
import { Calculations, Row, Wrapper } from "./CreditRateItem.styles";
import { TitleStyled } from "@shared/ui";
import { ICreditRateItemProps } from "./CreditRateItem.interfaces";
import { Button, Form } from "antd";
import { useCalculateCredit } from "@entities/Credit/hooks/useCalculateCredit";

export const CreditRateItem: FC<ICreditRateItemProps> = (props) => {
  const { name, rate, id, formData } = props;
  
  if (formData) {
    const { status, data: rateItems } = useCalculateCredit({
      rateId: id,
      amount: formData.amount,
      termMonths: formData.termMonths,
    });
  }

  const handleClick = () => {
    console.log({ ...formData }, id);
  };

  return (
    <Wrapper>
      <Row>
        <TitleStyled level={4}>{name}</TitleStyled>

        <TitleStyled level={4}>{rate}%</TitleStyled>
      </Row>
      <Row>
        <Calculations>
          <span>Ежемесячный платеж:</span>
          <span>Общая сумма:</span>
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
