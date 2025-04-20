import { useState } from "react";
import { Button, Form, FormProps, Input, Modal, Select } from "antd";
import { FC } from "react";
import { useCreateAccount } from "../hooks";
import { useStores } from "@shared/contexts/stores";
import { IAccount } from "@entities/Account/models";
import { ECurrencies } from "@shared/types";

export const CreateAccount: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currency, setCurrency] = useState<ECurrencies>(ECurrencies.RUB);
  const { Option } = Select;
  const { mutate } = useCreateAccount();
  const {
    accountStore: { addVisibleAccount },
  } = useStores();

  type FieldType = {
    name: string;
    currency: ECurrencies;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    mutate(
      { name: values.name, currency: values.currency },
      {
        onSuccess: (newAccount: IAccount) => {
          const account: IAccount = {
            name: newAccount.name,
            id: newAccount.id,
            status: newAccount.status,
            balance: newAccount.balance,
            currency: newAccount.currency,
            transactions: [],
          };
          addVisibleAccount(account);
        },
        onError: (error) => {
          console.error("Ошибка:", error);
        },
      }
    );
    setIsModalOpen(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Создать счет
      </Button>
      <Modal
        title="Введите данные"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item<FieldType>
            label="Название"
            name="name"
            rules={[{ required: true, message: "Введите название" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Валюта"
            name="currency"
            rules={[{ required: true, message: "Выберите валюту" }]}
          >
            <Select value={currency} onChange={(value) => setCurrency(value)}>
              <Option value={ECurrencies.EUR}>евро</Option>
              <Option value={ECurrencies.RUB}>рубль</Option>
              <Option value={ECurrencies.USD}>доллар</Option>
            </Select>
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Создать
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
