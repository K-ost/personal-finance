import { API_URL } from "../constants/constants";
import { useAuthStore } from "../store/useAuthStore";
import { API_Method } from "../types/types";

export const getData = async <T>(uri: string): Promise<T> => {
  const token = useAuthStore.getState().token;
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
): Promise<T> => {
  const token = useAuthStore.getState().token;
  const response = await fetch(`${API_URL}${uri}`, {
    method,
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: body ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};
