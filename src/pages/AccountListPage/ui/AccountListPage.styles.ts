import styled from "styled-components";
import { AccountItemsList } from "@widgets/AccountItemsList";
import { HiddenAccountItemsList } from "@widgets/HiddenAccountItemsList";

export const AccountItemsListStyled = styled(AccountItemsList)`
  width: 100%;
`;
export const HiddenAccountItemsListStyled = styled(HiddenAccountItemsList)`
  width: 99%;
  margin-bottom: 5px;
`;
