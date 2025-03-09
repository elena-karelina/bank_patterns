import { useState } from "react";
import { Button, Form, FormProps, Input, Modal, Select } from "antd";
import { FC } from "react";
import { useStores } from "@shared/contexts/stores";
import { useCreateCredit } from "../hooks";
import { ICredit } from "@entities/Credit/model";
import { ICreateCreditResult } from "@entities/Credit/api/fetchCreateCredit/fetchCreateCredit.interfaces";

export const CreateCredit: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    creditStore: { rateList, addCredit },
    accountStore: { accountList },
  } = useStores();
  const { mutate } = useCreateCredit();

  type FieldType = {
    amount: number;
    termDays: number;
    rateId: string;
    accountIdToReceiveMoney: string;
  };

  const rateOptions = rateList?.map((rate) => ({
    value: rate.id,
    label: `${rate.name} ${rate.yearlyRate}`,
  }));

  const accountOptions = accountList
    ?.filter((account) => account.status === "Opened")
    .map((account) => ({
      value: account.id,
      label: `${account.name} ${account.balance}`,
    }));

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: FieldType) => {
    mutate(
      { ...values },
      {
        onSuccess: (result: ICreateCreditResult) => {
          const credit: ICredit = {
            id: result.id,
            amount: result.givenMoney,
            rate: result.rate.yearlyRate,
            deadlineTime: result.deadlineTime,
            status: result.status,
            transactions: [],
          };
          addCredit(credit);
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
        Взять кредит
      </Button>
      <Modal
        title="Введите данные"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item<FieldType>
            label="Сумма"
            name="amount"
            rules={[{ required: true, message: "Введите название" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Количество дней"
            name="termDays"
            rules={[{ required: true, message: "Введите название" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Тариф"
            name="rateId"
            rules={[{ required: true, message: "Введите название" }]}
          >
            <Select options={rateOptions} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Счет списания"
            name="accountIdToReceiveMoney"
            rules={[{ required: true, message: "Введите название" }]}
          >
            <Select options={accountOptions} />
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
