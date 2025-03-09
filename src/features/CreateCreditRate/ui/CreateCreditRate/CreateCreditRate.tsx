import { useState } from "react";
import { Button, Form, FormProps, Input, Modal } from "antd";
import { FC } from "react";
import { useCreateCreditRate } from "../../hooks";
import { useStores } from "@shared/contexts/stores";

export const CreateCreditRate: FC = () => {
  const {
    rateStore: { addRate },
  } = useStores();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate } = useCreateCreditRate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  type FieldType = {
    name: string;
    rate: number;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    mutate(
      { name: values.name, yearlyRate: values.rate }, // Передаем данные формы
      {
        onSuccess: (id) => {
          console.log("Данные успешно отправлены");
          addRate({ name: values.name, yearlyRate: values.rate, id });
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
        Создать тариф кредита
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
            label="Ставка"
            name="rate"
            rules={[{ required: true, message: "Укажите ставку" }]}
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
