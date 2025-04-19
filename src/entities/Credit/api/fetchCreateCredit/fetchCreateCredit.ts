import { HttpError } from "@shared/api";
import {
  ICreateCreditRequest,
  ICreateCreditResult,
} from "./fetchCreateCredit.interfaces";

export const fetchCreateCredit = async (
  data: ICreateCreditRequest
): Promise<ICreateCreditResult> => {
  const url = `http://51.250.46.120:5002/api/loan/new`;
  const token = localStorage.getItem("userToken");

  const response = await fetch(url, {
    method: "Post",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  const result: ICreateCreditResult = await response.json();
  console.log(result);
  return result;
};
