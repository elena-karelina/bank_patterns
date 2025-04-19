import { RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 15px 10px;
  border-radius: 10px;

  &:hover {
    background-color: var(--hover-color);
  }
`;

export const Icon = styled(RightOutlined)`
  font-size: 20px;
`;
export const Block = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
