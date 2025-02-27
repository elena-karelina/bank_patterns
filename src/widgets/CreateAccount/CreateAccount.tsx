import { useState } from "react";
import { Button, Modal } from "antd";
import { FC } from "react";

export const CreateAccount: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Создать счет
      </Button>
      <Modal
        title="Введите данные"
        open={isModalOpen}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Закрыть
          </Button>,
          <Button key="link" type="primary" onClick={handleOk}>
            Создать
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
