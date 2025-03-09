import { PageLayout } from "@shared/ui";
import { FC } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Wrapper } from "./LoginPage.styles";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@entities/User/hooks";

type FieldType = {
  phone: string;
  password: string;
};

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { mutate } = useLogin();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    mutate(
      { phone: values.phone, password: values.password },
      {
        onSuccess: () => {
          console.log("Данные успешно отправлены");
          navigate("/main");
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
    <PageLayout title="Войдите в аккаунт">
      <Wrapper>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Телефон"
            name="phone"
            rules={[{ required: true, message: "Введите телефон" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            rules={[{ required: true, message: "Введите пароль" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    </PageLayout>
  );
};
