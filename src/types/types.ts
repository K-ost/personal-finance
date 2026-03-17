import { PieValueType } from "@mui/x-charts";

export type SelectOption = {
  name: string;
  value: string;
};

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

export type Pot = {
  name: string;
  target: number;
  total: number;
  theme: string;
  _id: string;
};

export type ChartBudget = Omit<PieValueType, "id">;
