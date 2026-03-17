export type API_Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type AuthType = {
  accessToken?: string;
  msg?: string;
};

export type ServerResponse<T> = {
  msg: string;
  data: T[];
  count?: number;
  page?: number;
};
