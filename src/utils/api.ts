import { API_Method } from "../types";
import { API_URL } from "./constants";

export const getData = async <T>(
  uri: string
): Promise<{ count: number; data: T }> => {
  const response = await fetch(`${API_URL}${uri}`);
  const data = await response.json();
  const all = response.headers.get("X-Total-Count");
  return { count: Number(all), data };
};

export const mutateData = async <T, K>(
  uri: string,
  method: API_Method,
  body?: K
): Promise<T> => {
  const response = await fetch(`${API_URL}${uri}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : null,
  });
  let data = await response.json();
  if (response.status === 400) {
    data = { message: data };
  }
  return data;
};