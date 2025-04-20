import { useState } from "react";
import { Button, Checkbox, Form, FormProps, Input, Modal } from "antd";
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
    isUserRole: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    const roles = [roleId[EUserRole.Employee]];

    if (values.isUserRole) {
      roles.push(roleId[EUserRole.Client]);
    }

    mutate(
      { ...values, roles },
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

          <Form.Item<FieldType> valuePropName="checked" name="isUserRole">
            <Checkbox>Добавить роль пользователя</Checkbox>
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
