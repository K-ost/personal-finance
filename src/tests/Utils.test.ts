import { describe, expect, it } from "vitest";
import { getLocalPrice, transactionPrice } from "../utils/utils";

describe("Utils", () => {
  it("getLocalPrice", () => {
    const result = getLocalPrice(100);
    const result2 = getLocalPrice(1000.45);
    const result3 = getLocalPrice(500000.1);
    expect(result).toStrictEqual("$100.00");
    expect(result2).toStrictEqual("$1,000.45");
    expect(result3).toStrictEqual("$500,000.10");
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
});