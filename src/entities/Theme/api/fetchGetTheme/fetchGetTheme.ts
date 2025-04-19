import { TTheme } from "@entities/Theme/models";
import { HttpError } from "@shared/api";

export const fetchGetTheme = async (): Promise<TTheme> => {
  const url = `http://51.250.46.120:5004/api/theme`;
  const token = localStorage.getItem("userToken");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  const result: TTheme = await response.json();

  console.log(result);

  return result;
};
