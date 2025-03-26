import { beforeEach, describe, expect, it } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { APINock, WrapperHook } from "../../tests/testUtils";
import useGetData from "../useGetData";
import { ServerResponse, Transaction } from "../../types";
import { transactionFactory } from "../../tests/factories";
import { TRANSACTIONS_URI } from "../../utils/constants";

const mockedData: ServerResponse<Transaction> = {
  data: transactionFactory.buildList(3),
  count: 3,
  msg: "Ok",
  page: 1,
};

describe("useGetData", () => {
  beforeEach(() => {
    APINock.get("/transactions").reply(200, mockedData);
  });

  it("useGetData - enabled", async () => {
    const { result } = renderHook(
      () =>
        useGetData<ServerResponse<Transaction>>({
          key: ["transactions"],
          uri: TRANSACTIONS_URI,
        }),
      { wrapper: WrapperHook }
    );

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.count).toBe(3);
  });
});
