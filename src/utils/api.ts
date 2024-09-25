import { API_Method } from "../types";
import { API_URL } from "./constants";

export const getData = async <T>(
  uri: string
): Promise<{ count: number; data: T }> => {
  try {
    const response = await fetch(`${API_URL}${uri}`);
    let data = await response.json();
    const all = response.headers.get("X-Total-Count");
    return { count: Number(all), data };
  } catch (error) {
    throw error;
  }
};

export const mutateData = async <T, K>(
  uri: string,
  method: API_Method,
  body?: K
): Promise<T> => {
  try {
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
  } catch (error) {
    throw error;
  }
};
