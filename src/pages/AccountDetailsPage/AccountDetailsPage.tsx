import { FC } from "react";
import { PageLayout } from "@shared/ui";
import Title from "antd/es/typography/Title";
import { TransactionHistoryStyled } from "./AccountDetailsPage.styles";
import { useParams } from "react-router-dom";
import { useStores } from "@shared/contexts/stores";

export const AccountDetailsPage: FC = () => {
  const { id } = useParams();
  const {
    accountStore: { clickedAccount },
  } = useStores();
  return (
    <PageLayout
      title={`Информация о счете "${clickedAccount?.name}"`}
      withNavigationHome={true}
    >
      <Title level={4}>История операций</Title>
      <TransactionHistoryStyled />
    </PageLayout>
  );
};
