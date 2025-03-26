import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useAuthStore } from "../../store/useAuthStore";
import { WrapperHook } from "../../tests/testUtils";
import useFileUpload from "../useFileUpload";

function initMockState(link: string = "") {
  const { result: resultState } = renderHook(() => useAuthStore(), {
    wrapper: WrapperHook,
  });
  resultState.current.avatar = link;
}

describe("useFileUpload", () => {
  it("Avatar doesn't exist changing", () => {
    initMockState();
    const { result } = renderHook(() => useFileUpload(), {
      wrapper: WrapperHook,
    });
    expect(result.current.isDirtyAva).toBe(false);
  });

  it("Removing current avatar", () => {
    initMockState("http://test.test/avatar.png");
    const { result } = renderHook(() => useFileUpload(), {
      wrapper: WrapperHook,
    });
    expect(result.current.avatar).toStrictEqual("http://test.test/avatar.png");
    act(() => {
      result.current.removeFile();
    });
    expect(result.current.avatar).toStrictEqual("");
  });
});
