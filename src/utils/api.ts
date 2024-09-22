import { API_Method } from "../types";
import { API_URL } from "./constants";

export const requestData = async <T, K>(
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
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
