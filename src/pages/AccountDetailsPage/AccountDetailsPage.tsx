import { FC } from "react";
import { BlockWrapper, PageLayout, TitleStyled } from "@shared/ui";
import Title from "antd/es/typography/Title";
import {
  CopyOutlinedStyled,
  Row,
  TransactionHistoryStyled,
} from "./AccountDetailsPage.styles";
import { useStores } from "@shared/contexts/stores";
import { Depositing } from "@features/Depositing";
import { observer } from "mobx-react-lite";
import { Withdrawal } from "@features/Withdrawal";
import { TransferBetweenAccounts } from "@features/TransferBetweenAccounts";
import { currencySymbols, ECurrencies } from "@shared/types";

export const AccountDetailsPage: FC = observer(() => {
  const {
    accountStore: { clickedAccount },
  } = useStores();

  // const accountNumber = formatNumberWithSpaces(12121212121);

  const handleCopy = () => {
    navigator.clipboard.writeText(clickedAccount?.number as string);
  };
  console.log(clickedAccount?.currency, Object.keys(currencySymbols));

  const currency = clickedAccount?.currency as ECurrencies;
  const symbol = currencySymbols[currency];

  return (
    <PageLayout
      title={`Информация о счете "${clickedAccount?.name}"`}
      withNavigationHome={true}
    >
      <Row>
        <TitleStyled level={4}>Номер счета: </TitleStyled>{" "}
        {clickedAccount?.number}
        <CopyOutlinedStyled onClick={handleCopy} />
      </Row>
      <Title level={4}>
        Баланс: {clickedAccount?.balance} {symbol}
      </Title>
      {clickedAccount?.status === "Opened" && (
        <Row>
          <Depositing />
          <Withdrawal />
          <TransferBetweenAccounts />
        </Row>
      )}

      <Title level={4}>История операций</Title>
      <BlockWrapper>
        <TransactionHistoryStyled />
      </BlockWrapper>
    </PageLayout>
  );
});
