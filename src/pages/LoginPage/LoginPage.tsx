import { PageLayout } from "@shared/ui";
import { FC } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Wrapper } from "./LoginPage.styles";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
};

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    navigate("/main");
    console.log("Success:", values);
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
            name="username"
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
