export type API_Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type Balance = {
  current: number;
  income: number;
  expenses: number;
};

export type Transaction = {
  id: number;
  avatar: string;
  name: string;
  category: string;
  date: Date;
  amount: number;
  recurring: boolean;
};

export type Pot = {
  name: string;
  target: number;
  total: number;
  theme: string;
};

export type UserRole = "admin" | "user";

export type User = {
  id?: number;
  email: string;
  password: string;
  name: string;
  avatar?: string;
  role: UserRole;
};

export type CustomPalette = {
  beige500: string;
  beige100: string;
  grey900: string;
  grey500: string;
  grey300: string;
  grey100: string;
  secondary: {
    green: string;
    yellow: string;
    cyan: string;
    navy: string;
    purple: string;
  };
  other: {
    purple: string;
    turquoise: string;
    brown: string;
    magenta: string;
    blue: string;
    navy: string;
    army: string;
    gold: string;
    orange: string;
  };
};
