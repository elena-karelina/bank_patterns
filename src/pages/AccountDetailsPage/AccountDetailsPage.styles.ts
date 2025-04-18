import { CopyOutlined } from "@ant-design/icons";
import { TransactionHistory } from "@widgets/TransactionHistory";
import styled from "styled-components";

export const TransactionHistoryStyled = styled(TransactionHistory)`
  margin-top: 30px;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
`;

export const CopyOutlinedStyled = styled(CopyOutlined)`
  font-size: 20px;
  color: grey;
  cursor: pointer;
`;
