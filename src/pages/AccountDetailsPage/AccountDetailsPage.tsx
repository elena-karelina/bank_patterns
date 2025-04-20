import { FC } from "react";
import { BlockWrapper, PageLayout } from "@shared/ui";
import Title from "antd/es/typography/Title";
import { TransactionHistoryStyled } from "./AccountDetailsPage.styles";
import { useStores } from "@shared/contexts/stores";
import { currencySymbols, ECurrencies } from "@shared/types";

export const AccountDetailsPage: FC = () => {
  const {
    accountStore: { clickedAccount },
  } = useStores();

  const currency = clickedAccount?.currency as ECurrencies;
  const symbol = currencySymbols[currency];

  return (
    <PageLayout title={`Информация о счете "${clickedAccount?.name}"`}>
      <Title level={4}>
        Баланс: {clickedAccount?.balance} {symbol}
      </Title>
      <Title level={4}>История операций</Title>
      <BlockWrapper>
        <TransactionHistoryStyled />
      </BlockWrapper>
    </PageLayout>
  );
};
