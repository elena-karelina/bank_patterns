import { LineShimmer } from "@shared/ui";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 15px 10px;
  border-radius: 10px;
`;

export const Rate = styled.span`
  font-sixe: 16px;
`;

export const Title = styled.span`
  font-sixe: 20px;
`;

export const CreditRateItemShimmer = styled(LineShimmer)`
  width: 100% !important;
  height: 58px !important;
`;
