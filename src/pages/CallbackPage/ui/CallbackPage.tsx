import { FC, useEffect } from "react";
import { completeSignIn } from "../lib";
import { useNavigate } from "react-router-dom";

export const CallbackPage: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    completeSignIn()
      .then(() => {
        navigate("/main");
      })
      .catch((error) => {
        console.error("Ошибка в callback:", error);
      });
  }, []);

  return <div>Вход в систему...</div>;
};
