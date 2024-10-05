import { beforeEach, describe, expect, it } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { APINock, WrapperHook } from "../../tests/testUtils";
import useGetData from "../useGetData";
import { Transaction } from "../../types";
import { transactionFactory } from "../../tests/factories";

const mockedData = transactionFactory.buildList(3);

describe("useGetData", () => {
  beforeEach(() => {
    APINock.get("/transactions").reply(200, mockedData);
    const { result } = renderHook(
      () =>
        useGetData<Transaction[]>({
          key: ["transactions"],
          uri: "/transactions",
          enabled: false,
        }),
      { wrapper: WrapperHook }
    );
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.data).toBe(undefined);
  });

  it("useGetData - disabled", async () => {});

  it("useGetData - enabled", async () => {
    const { result } = renderHook(
      () =>
        useGetData<Transaction[]>({
          key: ["transactions"],
          uri: "/transactions",
        }),
      { wrapper: WrapperHook }
    );

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.data.length).toBe(3);

    result.current.data?.data.forEach((item) => {
      expect(item.hasOwnProperty("id")).toBe(true);
      expect(item.hasOwnProperty("name")).toBe(true);
      expect(item.hasOwnProperty("amount")).toBe(true);
    });
  });
});
