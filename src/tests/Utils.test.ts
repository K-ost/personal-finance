import { describe, expect, it } from "vitest";
import {
  createBillsDate,
  createDate,
  getChartLimit,
  getLocalPrice,
  getProgressValue,
  transactionPrice,
} from "../utils/utils";

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

  it("getChartLimit", () => {
    const result = getChartLimit([
      {
        category: "category1",
        maximum: 1000,
        theme: "#d1d1d1",
        latest: [],
      },
      {
        category: "category2",
        maximum: 500,
        theme: "#a1a1a1",
        latest: [],
      },
    ]);
    expect(result).toStrictEqual("$1,500");
  });

  it("createDate", () => {
    const result = createDate("2024-10-01T09:45:32Z");
    expect(result).toBe("1 Oct 2024");
  });

  it("createBillsDate", () => {
    const result = createBillsDate("2024-08-18T09:45:32Z");
    const result2 = createBillsDate("2024-08-11T09:45:32Z");
    const result3 = createBillsDate("2024-08-12T09:45:32Z");
    const result4 = createBillsDate("2024-08-13T09:45:32Z");
    const resultFirst = createBillsDate("2024-08-01T09:45:32Z");
    const resultFirst2 = createBillsDate("2024-08-21T09:45:32Z");
    const resultFirst3 = createBillsDate("2024-08-31T09:45:32Z");
    const resultSecond = createBillsDate("2024-08-02T09:45:32Z");
    const resultSecond2 = createBillsDate("2024-08-22T09:45:32Z");
    const resultThird = createBillsDate("2024-08-03T09:45:32Z");
    const resultThird2 = createBillsDate("2024-08-23T09:45:32Z");

    expect(result).toBe("18th");
    expect(result2).toBe("11th");
    expect(result3).toBe("12th");
    expect(result4).toBe("13th");
    expect(resultFirst).toBe("1st");
    expect(resultFirst2).toBe("21st");
    expect(resultFirst3).toBe("31st");
    expect(resultSecond).toBe("2nd");
    expect(resultSecond2).toBe("22nd");
    expect(resultThird).toBe("3rd");
    expect(resultThird2).toBe("23rd");
  });
});
