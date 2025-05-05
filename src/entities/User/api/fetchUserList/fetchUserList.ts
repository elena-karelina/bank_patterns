import { roleId } from "@entities/User/models/types/index";
import { IUserList, IUserResult } from "./fetchUserList.interfaces";
import { fetchWithCircuitBreaker, HttpError } from "@shared/api";

export const fetchUserList = async ({
  role,
  circuitBreaker,
}: IUserList): Promise<IUserResult[]> => {
  const url = `http://51.250.46.120:5003/api/user/all?roleId=${roleId[role]}`;
  const token = localStorage.getItem("token");

  console.log(token);
  console.log(url);

  const response = await fetchWithCircuitBreaker(
    url,
    {
      method: "GET",
      headers: {
        Accept: "text/plain",
        Authorization: `Bearer ${token}`,
      },
    },
    circuitBreaker
  );

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  const data: IUserResult[] = await response.json();
  console.log(data);
  return data;
};
