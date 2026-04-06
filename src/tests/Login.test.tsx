import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import { APINock, Wrapper } from "./testUtils";

describe("Login Page", () => {
  beforeEach(() => {
    render(<Wrapper initialEntries={["/login"]} />);
  });

  it("Login - Form validation", async () => {
    await userEvent.type(screen.getByTestId("email"), "admin");
    await userEvent.type(screen.getByTestId("password"), "111");
    await userEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByText("Incorrect Email")).toBeInTheDocument();
    expect(screen.getByText("Should be at least 4 characters")).toBeInTheDocument();
  });

  it("Login - Error message", async () => {
    APINock.post("/login", {
      email: "admin@test.com",
      password: "12345",
    }).reply(401, { msg: "Incorrect password" });

    await userEvent.type(screen.getByTestId("email"), "admin@test.com");
    await userEvent.type(screen.getByTestId("password"), "12345");
    await userEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(await screen.findByText("Incorrect password"));
  });

  it("Login - successfull", async () => {
    APINock.post("/login", {
      email: "admin@test.com",
      password: "1111",
    }).reply(201, {
      accessToken: "mocked-token",
      user: { _id: "1", email: "test@test.com", name: "Test" },
    });

    await userEvent.type(screen.getByTestId("email"), "admin@test.com");
    await userEvent.type(screen.getByTestId("password"), "1111");
    await userEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(await screen.findByText("You've been logged"));
  });
});
