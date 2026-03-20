import { describe, expect, it } from "vitest";

import { budgetFactory } from "../../tests/factories";
import BudgetService from "../BudgetService";

const budgetService = new BudgetService();

const budget = budgetFactory.build();
const spent = budgetService.getBudgetSpent(budget);

describe("Budget Service", () => {
  it("Getting Budget Spent", () => {
    expect(spent).toStrictEqual(700);
  });

  it("Getting budget percent", () => {
    const percent = budgetService.getBudgetPercent(budget.maximum, spent);
    expect(percent).toStrictEqual(70);
  });

  it("Getting budget percent while having spent much more", () => {
    const percent = budgetService.getBudgetPercent(budget.maximum, 10000);
    expect(percent).toStrictEqual(100);
  });
});
