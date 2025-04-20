import { userManager } from "@shared/api";

export const logoutRedirect = async () => {
  try {
    await userManager.signoutRedirect();
  } catch (error) {
    console.error("Ошибка при выходе:", error);
  }
};
