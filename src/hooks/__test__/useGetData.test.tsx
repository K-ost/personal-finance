import { beforeEach, describe, expect, it } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { APINock, WrapperHook } from "../../tests/testUtils";
import useGetData from "../useGetData";
import { Transaction } from "../../types";
import { transactionFactory } from "../../tests/factories";
import { TRANSACTIONS_URI } from "../../utils/constants";

const mockedData = transactionFactory.buildList(3);

describe("useGetData", () => {
  beforeEach(() => {
    APINock.get("/transactions").reply(200, mockedData);
    const { result } = renderHook(
      () =>
        useGetData<Transaction[]>({
          key: ["transactions"],
          uri: TRANSACTIONS_URI,
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
          uri: TRANSACTIONS_URI,
        }),
      { wrapper: WrapperHook }
    );

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.length).toBe(3);
  });
});
