import styled from "styled-components";
import { Tabs } from "antd";
import { AccountListPage } from "@pages/AccountListPage";
import { CreditPage } from "@pages/CreditPage/CreditPage";

export const AccountListPageStyled = styled(AccountListPage)`
  width: 100%;
`;

export const CreditPageStyled = styled(CreditPage)`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
`;

export const TabsStyled = styled(Tabs)`
  margin-left: -157px;
  width: calc(100% + 157px);
`;
