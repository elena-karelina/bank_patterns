import { ICalculateCreditResult } from "@entities/Credit/model";
import { ICalculateCreditRequest } from "./fetchCalculateCredit.interfaces";

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
    throw new Error("error");
  }

  const result: ICalculateCreditResult = await response.json();
  console.log(result);
  return result;
};
