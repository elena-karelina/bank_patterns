import { Button, Modal } from "antd";
import { FC, useState } from "react";
import { AccountInputForm } from "../AccountInputForm";
import { AmountInputForm } from "../AmountInputForm";
import { ITransferMoneyRates } from "@features/TransferBetweenAccounts/model";

export const TransferBetweenAccounts: FC = () => {
  const [open, setOpen] = useState(false);
  const [isAccountForm, setIsAccountForm] = useState(true);
  const [transferData, setTransferData] = useState<ITransferMoneyRates | null>(
    null
  );
  const [accountTo, setAccountTo] = useState<string | null>(null);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
    setIsAccountForm(true);
    setTransferData(null);
  };

  const handleSetForm = (data: ITransferMoneyRates, accountTo: string) => {
    setTransferData(data);
    setIsAccountForm(false);
    setAccountTo(accountTo);
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
          <AmountInputForm
            transferData={transferData}
            accountTo={accountTo as string}
            onSuccess={() => setOpen(false)}
          />
        )}
      </Modal>
    </>
  );
};
