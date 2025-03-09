import { LeftOutlined } from "@ant-design/icons";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./NavigationHome.styles";
import { TEXTS } from "./NavigationHome.constants";

export const NavigationHome: FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };
  return (
    <Wrapper onClick={handleClick} className={className}>
      <LeftOutlined />
      {TEXTS.button}
    </Wrapper>
  );
};
