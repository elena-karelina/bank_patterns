import { loginRedirect } from "@shared/utils";

export const handleError = (error: Error & { status?: number }): boolean => {
  console.log(error.message);

  if (error.status === 401) {
    console.log("handleError 401");

    loginRedirect();
    localStorage.removeItem("token");
  }
  return false;
};
