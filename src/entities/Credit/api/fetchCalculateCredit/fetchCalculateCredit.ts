import {
  ICalculateCreditRequest,
  ICalculateCreditResponse,
} from "./fetchCalculateCredit.interfaces";

export const fetchCalculateCredit = async (
  data: ICalculateCreditRequest
): Promise<ICalculateCreditResponse> => {
  const { amount, termMonths, rateId } = data;

  const url = `http://51.250.46.120:5002/terms?amount=${amount}&termMonths=${termMonths}&rateId=${rateId}`;
  const token = localStorage.getItem("userToken");

  const response = await fetch(url, {
    method: "Post",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("error");
  }

  const result: ICalculateCreditResponse = await response.json();
  return result;
};
