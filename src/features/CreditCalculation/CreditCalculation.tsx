import { CreditRateList } from "@widgets/CreditRateList";
import { Form, FormProps, Input } from "antd";
import { FC, useState } from "react";
import { Wrapper } from "./CreditCalculation.styles";
import { FieldType } from "./CreditCalculation.types";

export const CreditCalculation: FC = () => {
  const [formData, setFormData] = useState<FieldType>();

  const onFinish = (values: FieldType) => {
    setFormData(values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item<FieldType>
          label="Сумма"
          name="amount"
          rules={[{ required: true, message: "Введите сумму" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Количество месяцев"
          name="termMonths"
          rules={[{ required: true, message: "Введите количество месяцев" }]}
        >
          <Input />
        </Form.Item>
        <CreditRateList formData={formData} />
      </Form>
    </Wrapper>
  );
};
