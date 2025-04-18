import { Button, Modal } from "antd";
import { FC, useState } from "react";
import { AccountInputForm } from "../AccountInputForm";
import { AmountInputForm } from "../AmountInputForm";

export const TransferBetweenAccounts: FC = () => {
  const [open, setOpen] = useState(false);
  const [isAccountForm, setIsAccountForm] = useState(true);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
    setIsAccountForm(true);
  };

  const handleSetForm = () => {
    setIsAccountForm(false);
  };

  return (
    <>
      <Button color="default" variant="filled" onClick={showModal}>
        Перевести
      </Button>
      <Modal
        title="Перевод между счетами"
        open={open}
        onCancel={hideModal}
        footer={null}
      >
        {isAccountForm ? (
          <AccountInputForm onSubmit={handleSetForm} />
        ) : (
          <AmountInputForm />
        )}
      </Modal>
    </>
  );
};
