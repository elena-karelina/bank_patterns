import styled from "styled-components";
import { AccountItemsList } from "@widgets/AccountItemsList/ui";
import { Tabs } from "antd";
import { CreditItemsList } from "@widgets/CreditItemsList/ui";

export const AccountItemsListStyled = styled(AccountItemsList)`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
`;

export const TabsStyled = styled(Tabs)`
  margin-left: -137px;
  width: calc(100% + 137px);
`;

export const CreditItemsListStyled = styled(CreditItemsList)`
  width: 100%;
`;
