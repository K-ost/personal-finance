import { Budget } from "../types/types";

interface IBudgetService {
  getBudgetSpent(budget: Budget): number;
  getBudgetPercent(budgetMax: number, spent: number): number;
}

class BudgetService implements IBudgetService {
  getBudgetSpent(budget: Budget): number {
    return Math.abs(budget.latest.reduce((acum, item) => (acum += item.amount), 0));
  }
  getBudgetPercent(budgetMax: number, spent: number): number {
    const percent = (spent * 100) / budgetMax;
    return percent > 100 ? 100 : percent;
  }
}

export default BudgetService;
