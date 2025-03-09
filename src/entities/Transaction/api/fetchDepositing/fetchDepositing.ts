import { ITransaction } from "@entities/Transaction/models";

export const fetchDepositing = async ({
  id,
  amount,
}: {
  id: string;
  amount: number;
}): Promise<ITransaction> => {
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
    throw new Error("error");
  }

  const data: { newDepositTransaction: ITransaction } = await response.json();

  return data.newDepositTransaction;
};
