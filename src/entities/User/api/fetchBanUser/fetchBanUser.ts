import { HttpError } from "@shared/api";

export const fetchBanUser = async (id: string): Promise<null> => {
  const url = `http://51.250.46.120:5003/api/ban/ban/${id}`;
  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: "Post",
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }
  console.log("ok");
  return null;
};
