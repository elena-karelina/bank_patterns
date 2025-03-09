export const fetchUnbanUser = async (id: string): Promise<null> => {
  const url = `http://51.250.46.120:5003/api/ban/unban/${id}`;
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
    throw new Error("error");
  }
  console.log("ok");
  return null;
};
