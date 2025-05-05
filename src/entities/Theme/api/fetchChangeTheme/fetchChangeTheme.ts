import { TTheme } from "@entities/Theme/models";
import { HttpError } from "@shared/api";
import { v4 } from "uuid";

export const fetchChangeTheme = async (theme: TTheme): Promise<null> => {
  const url = `http://51.250.46.120:5004/api/theme?theme=${theme}`;
  const token = localStorage.getItem("userToken");

  const idempotencyKey = v4();

  const response = await fetch(url, {
    method: "Post",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
      "Idempotency-Key": idempotencyKey,
    },
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  return null;
};
