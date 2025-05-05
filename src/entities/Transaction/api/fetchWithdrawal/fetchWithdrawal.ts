import { HttpError } from "@shared/api";
import { v4 } from "uuid";

export const fetchWithdrawal = async ({
  id,
  amount,
}: {
  id: string;
  amount: number;
}): Promise<null> => {
  const url = `http://51.250.46.120:5001/core/transaction/${id}/withdrawal`;
  const token = localStorage.getItem("userToken");

  const idempotencyKey = v4();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({
      amount,
    }),
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  return null;
};
