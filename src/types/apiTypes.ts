export type API_Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type UserType = {
  email: string;
  name: string;
  id: string;
};

export type AuthType = {
  accessToken?: string;
  msg?: string;
  user?: UserType;
};

export type ServerResponse<T> = {
  msg: string;
  data: T[];
  count?: number;
  page?: number;
};
