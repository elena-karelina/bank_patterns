import { useState } from "react";
import { Button, Form, FormProps, Input, Modal } from "antd";
import { FC } from "react";
import { useDepositing } from "../hooks";
import { useStores } from "@shared/contexts/stores";
import { useParams } from "react-router-dom";
import { ITransaction } from "@entities/Transaction/models";

export const Depositing: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const { mutate } = useDepositing();
  const {
    accountStore: { clickedAccount, addTransaction },
  } = useStores();

  type FieldType = {
    amount: number;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (!id) {
      console.error("ID не должен быть undefined");
      return;
    }
    mutate(
      { amount: values.amount, id },
      {
        onSuccess: (transaction: ITransaction) => {
          addTransaction({ id: clickedAccount?.id as string, transaction });
          console.log("транзакция прошла");
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
      <Button color="cyan" variant="solid" onClick={showModal}>
        Пополнить
      </Button>
      <Modal
        title="Введите данные"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item<FieldType>
            label="Сумма"
            name="amount"
            rules={[{ required: true, message: "Введите сумму пополнения" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              color="cyan"
              variant="outlined"
              type="primary"
              htmlType="submit"
            >
              Пополнить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
