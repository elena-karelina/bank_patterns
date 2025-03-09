export const fetchCreateAccount = async (name: string): Promise<null> => {
  const url = `http://51.250.46.120:5001/core/account`;
  const token = localStorage.getItem("userToken");
  console.log("userToken", token);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
    }),
  });

  if (!response.ok) {
    throw new Error("error");
  }

  return null;
};
