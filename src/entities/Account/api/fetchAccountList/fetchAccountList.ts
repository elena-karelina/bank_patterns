import { IAccount } from "@entities/Account/models";
import { IAccountListResponse } from "./fetchAccountList.interfaces";

export const fetchAccountList = async (id: string): Promise<IAccount[]> => {
  const url = `http://51.250.46.120:5001/core/support/account?Users=${id}`;
  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("error");
  }

  const data: IAccountListResponse = await response.json();
  return data.accounts;
};
