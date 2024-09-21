export type Balance = {
  current: number;
  income: number;
  expenses: number;
};

export type Transaction = {
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
  id: number;
  email: string;
  password: string;
  name: string;
  avatar?: string;
  role: UserRole;
};
