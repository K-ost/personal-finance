import { beforeAll, describe, expect, it } from "vitest";
import { APINock, WrapperHook } from "../../tests/testUtils";
import { budgetFactory } from "../../tests/factories";
import { act, renderHook, waitFor } from "@testing-library/react";
import useMutateData from "../useMutateData";
import { Budget } from "../../types";

const mockedBudget = budgetFactory.build({ latest: [] });
const bodyBudget: Partial<Budget> = { ...mockedBudget };
delete bodyBudget._id;
delete bodyBudget.latest;
const patchedData = {
  ...mockedBudget,
  category: "General",
};

describe("useMutateData", () => {
  beforeAll(() => {
    APINock.post("/budgets", bodyBudget).reply(200, mockedBudget);
    APINock.patch("/budgets/1", { category: "General" }).reply(200, patchedData);
    APINock.delete("/budgets/1").reply(200, {});
  });

  it("Post data", async () => {
    const { result } = renderHook(
      () =>
        useMutateData<Budget, Omit<Partial<Budget>, "id" | "latest">>({
          key: ["budgets"],
          method: "POST",
          uri: "/budgets",
        }),
      { wrapper: WrapperHook }
    );
    act(() => {
      result.current.mutate(bodyBudget);
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data).toStrictEqual(mockedBudget);
  });

  it("Patch data", async () => {
    const { result } = renderHook(
      () =>
        useMutateData<Budget, Omit<Partial<Budget>, "id" | "latest">>({
          key: ["budgets"],
          method: "PATCH",
          uri: "/budgets/1",
        }),
      { wrapper: WrapperHook }
    );
    act(() => {
      result.current.mutate({
        category: "General",
      });
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data).toStrictEqual(patchedData);
  });

  it("Delete data", async () => {
    const { result } = renderHook(
      () =>
        useMutateData({
          key: ["budgets"],
          method: "DELETE",
          uri: "/budgets/1",
        }),
      { wrapper: WrapperHook }
    );
    act(() => {
      result.current.mutate(undefined);
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data).toStrictEqual({});
  });
});
