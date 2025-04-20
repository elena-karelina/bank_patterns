import { HttpError } from "@shared/api";

export const fetchDepositing = async ({
  id,
  amount,
}: {
  id: string;
  amount: number;
}): Promise<null> => {
  const url = `http://51.250.46.120:5001/core/transaction/${id}/deposit`;
  const token = localStorage.getItem("userToken");
  console.log(url, token);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
    }),
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  // const data: { newDepositTransaction: ITransaction } = await response.json();

  return null;
};
