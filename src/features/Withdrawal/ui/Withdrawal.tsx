import { useState } from "react";
import { Button, Form, FormProps, Input, Modal } from "antd";
import { FC } from "react";
import { useStores } from "@shared/contexts/stores";
import { useParams } from "react-router-dom";
import { ITransaction } from "@entities/Transaction/models";
import { useWithdrawal } from "../hooks";

export const Withdrawal: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const { mutate } = useWithdrawal();
  const {
    accountStore: { addTransaction },
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
          console.log(transaction);
          addTransaction({ id: id as string, transaction });
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
      <Button color="danger" variant="solid" onClick={showModal}>
        Снять
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
              color="danger"
              variant="outlined"
              type="primary"
              htmlType="submit"
            >
              Снять
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
