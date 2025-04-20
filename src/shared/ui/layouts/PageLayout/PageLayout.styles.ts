import { SunOutlined } from "@ant-design/icons";
import { NavigationHome } from "@widgets/NavigationHome";
import Title from "antd/es/typography/Title";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 700px;
  margin: 25px auto;
  box-sizing: border-box;
`;

export const TitleStyled = styled(Title)`
  margin: 0 0 40px !important;
  box-sizing: border-box;
`;
export const NavigationHomeStyled = styled(NavigationHome)`
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

export const ThemeImage = styled(SunOutlined)`
  font-size: 30px;

  cursor: pointer;
  color: var(--text-color);
`;

export const Logout = styled.div`
  cursor: pointer;
  color: var(--text-color);
`;
