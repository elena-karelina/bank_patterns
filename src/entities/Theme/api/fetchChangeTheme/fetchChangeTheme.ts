import { TTheme } from "@entities/Theme/models";
import { HttpError } from "@shared/api";

export const fetchChangeTheme = async (theme: TTheme): Promise<null> => {
  const url = `http://51.250.46.120:5004/api/theme?theme=${theme}`;
  const token = localStorage.getItem("userToken");

  const response = await fetch(url, {
    method: "Post",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  return null;
};
