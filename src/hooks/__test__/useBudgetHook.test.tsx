import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { budgetFactory } from "../../tests/factories";
import useBudgetHook from "../useBudgetHook";

const mockedBudgets = budgetFactory.buildList(3);

describe("useBudgetHook", () => {
  it("Getting data for certain budget", () => {
    const { result } = renderHook(() =>
      useBudgetHook({
        budget: mockedBudgets[0],
      })
    );
    expect(result.current.spent).toBe(700);
    expect(result.current.remaining).toBe(300);
    expect(result.current.percent).toBe(70);
  });

  it("Getting data for chart", () => {
    const { result } = renderHook(() =>
      useBudgetHook({
        budget: undefined,
        data: mockedBudgets,
      })
    );
    expect(result.current.spentAll).toBe(2100);
    expect(result.current.chartData).toHaveLength(3);
  });
});
