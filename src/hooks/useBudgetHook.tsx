import { Budget, Transaction } from "../types";

type UseBudgetReturn = {
  percent: number;
  remaining: number;
  spent: number;
};

const useBudgetHook = (
  budget: Budget,
  transactions: Transaction[]
): UseBudgetReturn => {
  const spent = Math.abs(
    transactions.reduce((acum, item) => (acum += item.amount), 0)
  );
  const remained = budget.maximum - spent;
  const remaining = remained <= 0 ? 0 : remained;
  const percentCalc = (spent * 100) / budget.maximum;
  const percent = percentCalc > 100 ? 100 : percentCalc;

  return {
    percent,
    remaining,
    spent,
  };
};

export default useBudgetHook;
