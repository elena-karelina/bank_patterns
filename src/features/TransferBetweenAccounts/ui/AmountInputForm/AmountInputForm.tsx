import { Button, Form, FormProps, Input } from "antd";
import { FC } from "react";

export const AmountInputForm: FC = () => {
  type FieldType = {
    amount: number;
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
  };
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item<FieldType>
        label="Сумма перевода"
        name="amount"
        rules={[{ required: true, message: "Введите номер счета" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Перевести
        </Button>
      </Form.Item>
    </Form>
  );
};
