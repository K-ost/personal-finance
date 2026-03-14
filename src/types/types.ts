import { PieValueType } from "@mui/x-charts";
import { MakeOptional } from "@mui/x-charts/internals";

export type SelectOption = {
  name: string;
  value: string;
};

export type API_Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type BalanceType = {
  current: number;
  income: number;
  expenses: number;
};

export type Transaction = {
  _id: string;
  avatar: string;
  name: string;
  category: string;
  date: Date;
  amount: number;
  recurring: boolean;
};

export type RecurringBill = Transaction & {
  isPaid: boolean;
  isSoon: boolean;
};

export type Budget = {
  category: string;
  maximum: number;
  theme: string;
  latest: Transaction[];
  _id: string;
};

export type ChartBudget = MakeOptional<PieValueType, "id">;

export type Pot = {
  name: string;
  target: number;
  total: number;
  theme: string;
  _id: string;
};

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

export type CustomPalette = {
  beige500: string;
  beige300: string;
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
