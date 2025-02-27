import { FC } from "react";
import { PageLayout } from "@shared/ui";
import Title from "antd/es/typography/Title";
import { TransactionHistoryStyled } from "./AccountDetailsPage.styles";

export const AccountDetailsPage: FC = () => {
  return (
    <PageLayout title="Информация о счете ***" withNavigationHome={true}>
      <Title level={4}>История операций</Title>
      <TransactionHistoryStyled />
    </PageLayout>
  );
};
