import { act, renderHook } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import useDebounce from "../useDebounce";

function setup(value: string, delay: number = 500) {
  const { result, rerender } = renderHook(({ value }) => useDebounce(value, delay), {
    initialProps: { value },
  });
  return { result, rerender };
}

describe("useDebounce hook", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("Returns default value immediately", () => {
    const { result } = setup("test");
    expect(result.current).toBe("test");
  });

  it("Updates a value after delay", () => {
    const { result, rerender } = setup("a");
    expect(result.current).toBe("a");
    rerender({ value: "abc" });
    expect(result.current).toBe("a");

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("abc");
  });

  it("Resets timer while typing fast", () => {
    const { result, rerender } = setup("a");

    rerender({ value: "ab" });
    act(() => {
      vi.advanceTimersByTime(200);
    });

    rerender({ value: "abc" });
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("a");

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current).toBe("abc");
  });

  it("Custom delay", () => {
    const { result, rerender } = setup("a", 1000);
    rerender({ value: "abc" });
    expect(result.current).toBe("a");

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe("a");

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe("abc");
  });
});
