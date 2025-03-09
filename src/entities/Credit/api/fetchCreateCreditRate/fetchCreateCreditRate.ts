import { ICreateCredit } from "@entities/Credit/model";

export const fetchCreateCreditRate = async ({
  name,
  yearlyRate,
}: ICreateCredit): Promise<string> => {
  const url = `http://51.250.46.120:5002/api/rate/new`;
  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: "Post",
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      yearlyRate,
    }),
  });

  if (!response.ok) {
    throw new Error("error");
  }

  const id: string = await response.json();
  return id;
};
