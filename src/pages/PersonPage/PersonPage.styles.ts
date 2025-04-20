import styled from "styled-components";
import { AccountItemsList } from "@widgets/AccountItemsList/ui";
import { Tabs } from "antd";
import { CreditPage } from "@pages/CreditPage";

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

export const CreditPageStyled = styled(CreditPage)`
  width: 100%;
`;
