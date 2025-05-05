import { HttpError } from "@shared/api";
import {
  ICreateCreditRequest,
  ICreateCreditResult,
} from "./fetchCreateCredit.interfaces";
import { v4 } from "uuid";

export const fetchCreateCredit = async (
  data: ICreateCreditRequest
): Promise<ICreateCreditResult> => {
  const url = `http://51.250.46.120:5002/api/loan/new`;
  const token = localStorage.getItem("userToken");
  const idempotencyKey = v4();

  const response = await fetch(url, {
    method: "Post",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
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
