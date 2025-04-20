import { userManager } from "@shared/api";
import { User } from "oidc-client-ts";

export const completeSignIn = async () => {
  try {
    const user: User = await userManager.signinRedirectCallback();
    console.log("Пользователь вошёл:", user);
    localStorage.setItem("token", user.access_token);
  } catch (error) {
    console.error("Ошибка при завершении входа:", error);
  }
};
