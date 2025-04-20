import { SunOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Image = styled.img`
  width: 50px;
  position: absolute;
  bottom: 10px;
  left: 5;
  transform: scale(-1, 1);
`;

export const ThemeImage = styled(SunOutlined)`
  font-size: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: var(--text-color);
`;
