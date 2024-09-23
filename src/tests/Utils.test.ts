import { describe, expect, it } from "vitest";
import { getLocalPrice } from "../utils/utils";

describe("Utils", () => {
  it("getLocalPrice", () => {
    const result = getLocalPrice(100);
    const result2 = getLocalPrice(1000.45);
    const result3 = getLocalPrice(500000.1);
    expect(result).toStrictEqual("$100.00");
    expect(result2).toStrictEqual("$1,000.45");
    expect(result3).toStrictEqual("$500,000.10");
  });
});
