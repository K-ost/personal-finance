import axios from "axios";

import { API_URL } from "../constants/constants";
import { useAuthStore, useToken } from "../store/useAuthStore";
import { useNotificationStore } from "../store/useNotificationStore";
import { API_Method, ErrorResponse } from "../types/apiTypes";

const setToken = useAuthStore.getState().setToken;
const setLogout = useAuthStore.getState().setLogout;
const setNotification = useNotificationStore.getState().setNotification;

const http = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosService = async <T, K>(
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

http.interceptors.request.use((config) => {
  const token = useToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const initialRequest = error.config;

    if (
      error.status === 401 &&
      error.response?.data.msg === "Invalid token" &&
      !initialRequest._retry
    ) {
      initialRequest._retry = true;
      try {
        const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
        const accessToken = response.data.accessToken;
        setToken(accessToken);
        return http.request(initialRequest);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setLogout();
          setNotification("Session has expired");
        }
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
