import { ICredit } from "@entities/Credit/model";

export const fetchCreditList = async (id: string): Promise<ICredit[]> => {
  const url = `http://51.250.46.120:5002/api/loan/history?userId=${id}`;
  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("error");
  }

  const data: ICredit[] = await response.json();

  return data;
};
