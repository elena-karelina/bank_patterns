import { useState } from "react";
import { Button, Form, FormProps, Input, Modal } from "antd";
import { FC } from "react";
import { useCreateCreditRate } from "../../hooks";

export const CreateCreditRate: FC = () => {
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
      { name: values.name, rate: values.rate }, // Передаем данные формы
      {
        onSuccess: () => {
          console.log("Данные успешно отправлены");
        },
        onError: (error) => {
          console.error("Ошибка:", error);
        },
      }
    );
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
