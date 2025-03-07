import { ICreateCredit } from "@entities/Credit/model";

export const fetchCreateCreditRate = async ({
  name,
  rate,
}: ICreateCredit): Promise<void> => {
  const url = `http://51.250.46.120:5002/api/rate/new`;

  const response = await fetch(url, {
    method: "Post",
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      rate,
    }),
  });

  if (!response.ok) {
    throw new Error("error");
  }
};
