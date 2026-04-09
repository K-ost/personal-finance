import { API_URL } from "../constants/constants";
import { useAuthStore } from "../store/useAuthStore";
import { API_Method, ErrorResponse } from "../types/apiTypes";

export const apiRequest = async <T, K>(
  url: string,
  method: API_Method = "GET",
  body?: K,
): Promise<T> => {
  const token = useAuthStore.getState().accessToken;

  const response = await fetch(`${API_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    method,
  });

  const data = await response.json();

  if (data.msg === "Invalid token") {
    throw {
      message: data.msg,
      status: response.status,
    } as ErrorResponse;
  }

  return data;
};
