import { useState } from "react";
import { Button, Form, FormProps, Input, Modal } from "antd";
import { FC } from "react";
import { useStores } from "@shared/contexts/stores";
import { useCreateUser } from "@entities/User/hooks/useCreateUser/useCreateUser";
import { EUserRole, roleId } from "@entities/User/models";

export const CreateEmployee: FC = () => {
  const {
    userStore: { addEmployee },
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
      { ...values, roles: [roleId[EUserRole.Employee]] },
      {
        onSuccess: (user) => {
          console.log("Данные успешно отправлены");
          addEmployee(user);
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
        Создать сотрудника
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
