import { Button, Form, FormProps, Input } from "antd";
import { FC } from "react";
import { IAccountInputFormProps } from "./AccountInputForm.interfaces";

export const AccountInputForm: FC<IAccountInputFormProps> = ({ onSubmit }) => {
  type FieldType = {
    number: string;
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    onSubmit();
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item<FieldType>
        label="Введите номер счета, на который хотите перевести средства"
        name="number"
        rules={[{ required: true, message: "Введите номер счета" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Далее
        </Button>
      </Form.Item>
    </Form>
  );
};
