import { useTransferMoneyToAccount } from "@features/TransferBetweenAccounts/hooks/useTransferMoneyToAccount/useTransferMoneyToAccount";
import { ITransferMoneyRates } from "@features/TransferBetweenAccounts/model";
import { useStores } from "@shared/contexts/stores";
import { Button, Form, FormProps, Input } from "antd";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";

export const AmountInputForm: FC<{
  transferData: ITransferMoneyRates | null;
  accountTo: string;
  onSuccess: () => void;
}> = ({ transferData, accountTo, onSuccess }) => {
  const { id } = useParams();
  const [totalAmount, setTotalAmount] = useState<null | number>(null);
  const {
    accountStore: { clickedAccount },
  } = useStores();

  const { mutate } = useTransferMoneyToAccount();

  type FieldType = {
    amount: number;
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    mutate(
      {
        fromAccount: id as string,
        toAccount: accountTo,
        amount: values.amount,
      },
      {
        onSuccess: () => {
          console.log("перевод выполнен");
          onSuccess();
        },
        onError: (error) => {
          console.error("Ошибка:", error);
        },
      }
    );
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFieldsChange = (_: any, allFields: any) => {
    console.log(allFields, allFields[0].value);

    const amount = allFields[0].value;
    if (amount && transferData?.rate) {
      setTotalAmount(amount * transferData.rate);
    } else {
      setTotalAmount(null);
    }
  };

  const isCurrenciesMatch = clickedAccount?.currency === transferData?.currency;
  const note1 = <span>Валюта целевого счета отличается от вашей</span>;
  const note2 = (
    <p>
      Получателю придет {totalAmount} {transferData?.currency}
    </p>
  );

  console.log(
    clickedAccount?.currency,
    transferData?.currency,
    isCurrenciesMatch
  );

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onFieldsChange={onFieldsChange}
      layout="vertical"
    >
      <Form.Item<FieldType>
        label="Сумма перевода"
        name="amount"
        rules={[{ required: true, message: "Введите номер счета" }]}
      >
        <Input />
      </Form.Item>
      {!isCurrenciesMatch && note1}
      {!isCurrenciesMatch && totalAmount && note2}
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Перевести
        </Button>
      </Form.Item>
    </Form>
  );
};
