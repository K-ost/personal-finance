export type API_Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type UserRole = "admin" | "user";

export type UserType = {
  email: string;
  name: string;
  id: string;
  role: UserRole;
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

export type ErrorResponse = {
  message: string;
  status: number;
};
