import { render, renderHook, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProfileCard from "../ui/ProfileCard";
import { useAuthStore } from "../store/useAuthStore";
import { WrapperHook } from "./testUtils";

describe("Profile Card", () => {
  it("Without avatar", () => {
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: WrapperHook,
    });
    result.current.avatar = "";
    result.current.name = "Test";

    render(<ProfileCard />);

    expect(screen.getByRole("heading", { name: "Hi, Test" })).toBeDefined();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("With avatar", () => {
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: WrapperHook,
    });
    result.current.avatar = "http://avatar.test/avatar.jpg";

    render(<ProfileCard />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
