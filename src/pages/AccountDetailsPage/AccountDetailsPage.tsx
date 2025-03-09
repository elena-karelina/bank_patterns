import { FC } from "react";
import { PageLayout } from "@shared/ui";
import Title from "antd/es/typography/Title";
import { TransactionHistoryStyled } from "./AccountDetailsPage.styles";
import { useStores } from "@shared/contexts/stores";

export const AccountDetailsPage: FC = () => {
  const {
    accountStore: { clickedAccount },
  } = useStores();

  return (
    <PageLayout
      title={`Информация о счете "${clickedAccount?.name}"`}
      withNavigationHome={true}
    >
      <Title level={4}>Баланс: {clickedAccount?.balance}</Title>
      <Title level={4}>История операций</Title>
      <TransactionHistoryStyled />
    </PageLayout>
  );
};
