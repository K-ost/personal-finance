import { describe, expect, it } from "vitest";

import { budgetFactory } from "../../tests/factories";
import ChartService from "../ChartService";

const chartService = new ChartService();

const mockedBudgets = budgetFactory.buildList(2);
const chartData = chartService.getChartData(mockedBudgets);

describe("Chart Service", () => {
  it("Getting chart data", () => {
    expect(chartData[0]).toHaveProperty("color");
    expect(chartData[0]).toHaveProperty("label");
    expect(chartData[0]).toHaveProperty("value");
  });

  it("should", () => {
    const allSpent = chartService.getAllSpent(chartData);
    expect(allSpent).toStrictEqual(1400);
  });
});
