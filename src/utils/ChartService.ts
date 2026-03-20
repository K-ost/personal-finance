import { Budget, ChartBudget } from "../types/types";
import BudgetService from "./BudgetService";

interface IChartService {
  getChartData(data: Budget[]): ChartBudget[];
  getAllSpent(data: ChartBudget[]): number;
}

const budgetService = new BudgetService();

class ChartService implements IChartService {
  getChartData(data: Budget[]): ChartBudget[] {
    return data.map((item) => {
      const newItem: ChartBudget = {
        color: item.theme,
        label: item.category,
        value: budgetService.getBudgetSpent(item),
      };
      return newItem;
    });
  }

  getAllSpent(data: ChartBudget[]): number {
    return data.reduce((acc, el) => (acc += el.value), 0);
  }
}

export default ChartService;
