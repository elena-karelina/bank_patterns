import { ICreditRateDataResponse } from "./fetchCreditRateData.interfaces";

export const fetchCreditRateData =
  async (): Promise<ICreditRateDataResponse> => {
    const url = `http://51.250.46.120:5002/api/rate/list`;
    const token = localStorage.getItem("token");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "text/plain",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    if (!response.ok) {
      throw new Error("error");
    }

    const data: ICreditRateDataResponse = await response.json();
    return data;
  };
