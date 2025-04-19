import { useState } from "react";
import { Button, Form, FormProps, Input, Modal } from "antd";
import { FC } from "react";
import { useCreateAccount } from "../hooks";
import { useStores } from "@shared/contexts/stores";
import { IAccount } from "@entities/Account/models";

export const CreateAccount: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate } = useCreateAccount();
  const {
    accountStore: { addVisibleAccount },
  } = useStores();

  type FieldType = {
    name: string;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    mutate(values.name, {
      onSuccess: (newAccount: IAccount) => {
        const account: IAccount = {
          name: newAccount.name,
          id: newAccount.id,
          status: newAccount.status,
          balance: newAccount.balance,
          transactions: [],
        };
        addVisibleAccount(account);
      },
      onError: (error) => {
        console.error("Ошибка:", error);
      },
    });
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
