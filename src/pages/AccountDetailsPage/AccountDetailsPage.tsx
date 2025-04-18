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
import { formatNumberWithSpaces } from "@shared/utils";
import { TransferBetweenAccounts } from "@features/TransferBetweenAccounts";

export const AccountDetailsPage: FC = observer(() => {
  const {
    accountStore: { clickedAccount },
  } = useStores();

  const accountNumber = formatNumberWithSpaces(12121212121);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
  };

  return (
    <PageLayout
      title={`Информация о счете "${clickedAccount?.name}"`}
      withNavigationHome={true}
    >
      <Row>
        <TitleStyled level={4}>Номер счета: </TitleStyled> {accountNumber}
        <CopyOutlinedStyled onClick={handleCopy} />
      </Row>
      <Title level={4}>Баланс: {clickedAccount?.balance}</Title>
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
