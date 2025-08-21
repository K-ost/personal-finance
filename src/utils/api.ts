import { API_Method } from "../types";
import { API_URL } from "./constants";

export const getData = async <T>(uri: string, token?: string): Promise<T> => {
  const response = await fetch(`${API_URL}${uri}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const mutateData = async <T, K>(
  uri: string,
  method: API_Method,
  body?: K,
  token?: string
): Promise<T> => {
  const response = await fetch(`${API_URL}${uri}`, {
    method,
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: body ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};
