import { userManager } from "@shared/api";

export const loginRedirect = async () => {
  try {
    console.log("loginRedirect");
    await userManager.signinRedirect();
  } catch (error) {
    console.error("Ошибка при перенаправлении на страницу логина:", error);
  }
};
