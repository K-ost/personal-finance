import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Wrapper } from "./testUtils";
import userEvent from "@testing-library/user-event";

describe("Language Switcher", () => {
  beforeEach(() => {
    render(<Wrapper />);
  });

  it("Render", () => {
    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
  });

  it("Switching to Ru", async () => {
    await userEvent.click(screen.getByRole("button", { name: "Ru" }));
    expect(
      screen.queryByRole("heading", { name: "Login" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Авторизация" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Войти" })).toBeInTheDocument();
    expect(screen.getByText(/Следите за своими/)).toBeInTheDocument();
  });

  it("Switching to En", async () => {
    await userEvent.click(screen.getByRole("button", { name: "En" }));
    expect(
      screen.queryByRole("button", { name: "Войти" })
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/Следите за своими/)).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
    expect(screen.queryByText(/Keep track of your/)).toBeInTheDocument();
  });
});
