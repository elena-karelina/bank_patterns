import { FC } from "react";
import { BlockWrapper, PageLayout } from "@shared/ui";
import Title from "antd/es/typography/Title";
import { Row, TransactionHistoryStyled } from "./AccountDetailsPage.styles";
import { useStores } from "@shared/contexts/stores";
import { Depositing } from "@features/Depositing";
import { observer } from "mobx-react-lite";
import { Withdrawal } from "@features/Withdrawal";

export const AccountDetailsPage: FC = observer(() => {
  const {
    accountStore: { clickedAccount },
  } = useStores();

  console.log("AccountDetailsPage");

  return (
    <PageLayout
      title={`Информация о счете "${clickedAccount?.name}"`}
      withNavigationHome={true}
    >
      <Title level={4}>Баланс: {clickedAccount?.balance}</Title>
      {clickedAccount?.status === "Opened" && (
        <Row>
          <Depositing />
          <Withdrawal />
        </Row>
      )}

      <Title level={4}>История операций</Title>
      <BlockWrapper>
        <TransactionHistoryStyled />
      </BlockWrapper>
    </PageLayout>
  );
});
