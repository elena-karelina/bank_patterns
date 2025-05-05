import { ICreateUserOptions, IUser } from "@entities/User/models";
import { HttpError } from "@shared/api";

export const fetchCreateUser = async (
  options: ICreateUserOptions
): Promise<IUser> => {
  const url = `http://51.250.46.120:5003/api/user/create`;
  const token = localStorage.getItem("token");

  console.log(options);

  const response = await fetch(url, {
    method: "Post",
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Idempotency-Key": `${options.email}-${options.phoneNumber}`,
    },
    body: JSON.stringify({
      ...options,
    }),
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  const data: IUser = await response.json();
  console.log(data);
  return data;
};
