import { Budget, ChartBudget } from "../types";

type UseBudgetProps = {
  budget?: Budget;
  data?: Budget[];
};

type UseBudgetReturn = {
  percent: number;
  remaining: number;
  spent: number;
  spentAll: number;
  chartData: ChartBudget[];
};

const useBudgetHook = (props: UseBudgetProps): UseBudgetReturn => {
  const { budget, data } = props;
  let percent = 0,
    remaining = 0,
    spent = 0,
    spentAll = 0;
  let chartData: ChartBudget[] = [];

  const countSpentItem = (budget: Budget) => {
    return Math.abs(
      budget.latest.reduce((acum, item) => (acum += item.amount), 0)
    );
  };

  if (budget) {
    const remained = budget.maximum - countSpentItem(budget);
    remaining = remained <= 0 ? 0 : remained;
    const percentCalc = (countSpentItem(budget) * 100) / budget.maximum;
    percent = percentCalc > 100 ? 100 : percentCalc;
    spent = countSpentItem(budget);
  }

  if (data) {
    spentAll = data.reduce((acum, el) => {
      const spentItem = countSpentItem(el);
      return (acum += spentItem);
    }, 0);

    chartData = data.map((item) => {
      const newItem: ChartBudget = {
        color: item.theme,
        label: item.category,
        value: countSpentItem(item),
      };
      return newItem;
    });
  }

  return {
    percent,
    remaining,
    spent,
    spentAll,
    chartData,
  };
};

export default useBudgetHook;
