import { HttpError } from "@shared/api";

export const fetchHiddenAccountList = async (): Promise<string[]> => {
  const url = `http://51.250.46.120:5004/api/hidden-accounts`;
  const token = localStorage.getItem("userToken");
  console.log("userToken", token);

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

  const data: string[] = await response.json();

  return data;
};
