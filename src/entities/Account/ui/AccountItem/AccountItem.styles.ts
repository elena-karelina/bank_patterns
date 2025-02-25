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
    background-color: #ededed;
  }
`;

export const Icon = styled(RightOutlined)`
  font-size: 20px;
`;
