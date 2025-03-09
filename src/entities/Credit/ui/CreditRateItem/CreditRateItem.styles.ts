import { LineShimmer } from "@shared/ui";
import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: right;
  padding: 15px 10px 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Calculations = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  align-items: end;
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
