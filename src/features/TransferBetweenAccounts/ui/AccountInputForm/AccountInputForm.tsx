import { Button, Form, FormProps, Input } from "antd";
import { FC } from "react";
import { IAccountInputFormProps } from "./AccountInputForm.interfaces";
import { useGetTransferMoneyRates } from "@features/TransferBetweenAccounts/hooks";
import { useParams } from "react-router-dom";
import { ITransferMoneyRates } from "@features/TransferBetweenAccounts/model";

export const AccountInputForm: FC<IAccountInputFormProps> = ({ onSubmit }) => {
  const { id } = useParams();
  const { mutate } = useGetTransferMoneyRates();
  type FieldType = {
    number: string;
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    mutate(
      { fromAccount: id as string, toAccount: values.number },
      {
        onSuccess: (data: ITransferMoneyRates) => {
          console.log(data);
          onSubmit(data, values.number);
        },
        onError: (error) => {
          console.error("Ошибка:", error);
        },
      }
    );
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
