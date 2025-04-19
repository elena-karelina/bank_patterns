import { HttpError } from "@shared/api";

export const fetchCreditRating = async (): Promise<number> => {
  const url = `http://51.250.46.120:5002/api/loan/my-rating`;
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

  const data: number = await response.json();

  return data;
};
