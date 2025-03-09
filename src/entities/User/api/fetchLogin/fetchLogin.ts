import { ILoginData } from "@entities/User/models/types/index";
import { ILoginResult } from "./fetchLogin.interfaces";

export const fetchLogin = async ({
  phone,
  password,
}: ILoginData): Promise<string> => {
  const url = `http://51.250.46.120:5003/api/user/login`;

  const response = await fetch(url, {
    method: "Post",
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("error");
  }

  const data: ILoginResult = await response.json();
  console.log(data);
  localStorage.setItem("token", data.auth);

  return data.auth;
};
