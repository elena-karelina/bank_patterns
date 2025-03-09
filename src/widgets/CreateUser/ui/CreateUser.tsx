import { useState } from "react";
import { Button, Form, FormProps, Input, Modal } from "antd";
import { FC } from "react";
import { EUserRole, roleId } from "@entities/User/models/types/index";
import { useCreateUser } from "@entities/User/hooks/useCreateUser/useCreateUser";
import { useStores } from "@shared/contexts/stores";

export const CreateUser: FC = () => {
  const {
    userStore: { addUser },
  } = useStores();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate } = useCreateUser();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  type FieldType = {
    fullName: string;
    password: string;
    phoneNumber: string;
    email: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    mutate(
      { ...values, roles: [roleId[EUserRole.Client]] },
      {
        onSuccess: (user) => {
          console.log("Данные успешно отправлены");
          addUser(user);
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
        Создать пользователя
      </Button>
      <Modal
        title="Введите данные"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item<FieldType>
            label="Имя"
            name="fullName"
            rules={[{ required: true, message: "Введите имя" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            rules={[{ required: true, message: "Придумайте пароль" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Телефон"
            name="phoneNumber"
            rules={[{ required: true, message: "Укажите телефон" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Почта"
            name="email"
            rules={[{ required: true, message: "Введите почту" }]}
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
