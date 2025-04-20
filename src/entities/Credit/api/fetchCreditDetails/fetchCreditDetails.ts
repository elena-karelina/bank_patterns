import { HttpError } from "@shared/api";
import { ICreditDetailsResult } from "./fetchCreditDetails.interfaces";

export const fetchCreditDetails = async (
  id: string
): Promise<ICreditDetailsResult> => {
  const url = `http://51.250.46.120:5002/api/loan/${id}`;
  const token = localStorage.getItem("token");

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

  const result: ICreditDetailsResult = await response.json();
  console.log(result);
  return result;
};
