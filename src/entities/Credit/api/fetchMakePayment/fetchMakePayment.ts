import { HttpError } from "@shared/api";
import { v4 } from "uuid";

export const fetchMakePayment = async (id: string): Promise<null> => {
  const url = `http://51.250.46.120:5002/api/loan/${id}/pay`;
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
