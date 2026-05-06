import axios from "axios";

import { API_URL } from "../constants/constants";
import { API_Method, ErrorResponse } from "../types/apiTypes";

const http = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const axiosServie = async <T, K>(
  url: string,
  method: API_Method = "GET",
  body?: K | null,
): Promise<T> => {
  try {
    const response = await http<T>(url, {
      method,
      data: body ? body : undefined,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw {
        message: error.response?.data.msg,
        status: error.response?.status,
      } as ErrorResponse;
    } else {
      throw error;
    }
  }
};
