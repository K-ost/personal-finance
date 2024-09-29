import { describe, expect, it } from "vitest";
import {
  changeBudgetData,
  getChartLimit,
  getLocalPrice,
  getProgressValue,
  transactionPrice,
} from "../utils/utils";
import { ChartBudget } from "../types";

describe("Utils", () => {
  it("getLocalPrice", () => {
    const result = getLocalPrice(100);
    const result2 = getLocalPrice(1000.45);
    const result3 = getLocalPrice(500000.1);
    const result4 = getLocalPrice(100, true);
    expect(result).toStrictEqual("$100.00");
    expect(result2).toStrictEqual("$1,000.45");
    expect(result3).toStrictEqual("$500,000.10");
    expect(result4).toStrictEqual("$100");
  });

  it("transactionPrice", () => {
    const result = transactionPrice(75.5);
    const result2 = transactionPrice(50);
    const result3 = transactionPrice(-65);
    const result4 = transactionPrice(-5);
    const result5 = transactionPrice(3358);
    expect(result).toStrictEqual("+$75.50");
    expect(result2).toStrictEqual("+$50.00");
    expect(result3).toStrictEqual("-$65.00");
    expect(result4).toStrictEqual("-$5.00");
    expect(result5).toStrictEqual("+$3,358.00");
  });

  it("getProgressValue", () => {
    const result = getProgressValue(50, 1000);
    expect(result).toStrictEqual(5);
  });

  it("changeBudgetData", () => {
    const result = changeBudgetData([
      {
        category: "category",
        maximum: 1000,
        theme: "#d1d1d1",
      },
    ]);
    const expectedResult: ChartBudget[] = [
      {
        value: 1000,
        color: "#d1d1d1",
        label: "category",
      },
    ];
    expect(result).toStrictEqual(expectedResult);
  });

  it("getChartLimit", () => {
    const result = getChartLimit([
      {
        category: "category1",
        maximum: 1000,
        theme: "#d1d1d1",
      },
      {
        category: "category2",
        maximum: 500,
        theme: "#a1a1a1",
      },
    ]);
    expect(result).toStrictEqual("$1,500");
  });
});
