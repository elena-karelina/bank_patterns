import { ICalculateCreditResult } from "@entities/Credit/model";
import { ICalculateCreditRequest } from "./fetchCalculateCredit.interfaces";
import { HttpError } from "@shared/api";

export const fetchCalculateCredit = async (
  data: ICalculateCreditRequest
): Promise<ICalculateCreditResult> => {
  const { givenMoney, termDays, rateId } = data;

  const url = `http://51.250.46.120:5002/api/loan/terms?givenMoney=${givenMoney}&termDays=${termDays}&rateId=${rateId}`;
  const token = localStorage.getItem("userToken");

  const response = await fetch(url, {
    method: "Get",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  const result: ICalculateCreditResult = await response.json();
  console.log(result);
  return result;
};
