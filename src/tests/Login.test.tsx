import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { APINock, createUser, Wrapper } from "./testUtils";

describe("Login Page", () => {
  beforeEach(() => {
    render(<Wrapper initialEntries={["/login"]} />);
  });

  it("Login - Form validation", async () => {
    await userEvent.type(screen.getByTestId("email"), "admin");
    await userEvent.type(screen.getByTestId("password"), "1111");
    await userEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByText("Incorrect Email")).toBeInTheDocument();
    expect(
      screen.getByText("Should have 6 or more characters")
    ).toBeInTheDocument();
  });

  it("Login - Error message", async () => {
    APINock.post("/login", {
      email: "admin@test.com",
      password: "111111",
    }).reply(401, { message: "Incorrect password" });

    await userEvent.type(screen.getByTestId("email"), "admin@test.com");
    await userEvent.type(screen.getByTestId("password"), "111111");
    await userEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(screen.getByText("Incorrect password"));
    });
  });

  it("Login - successfull", async () => {
    APINock.post("/login", {
      email: "admin@test.com",
      password: "123456",
    }).reply(200, createUser("admin"));

    await userEvent.type(screen.getByTestId("email"), "admin@test.com");
    await userEvent.type(screen.getByTestId("password"), "123456");
    await userEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(screen.getByText("You've been logged successfully"));
    });
  });

  it("Logout", async () => {
    expect(screen.getByText("Overview")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Logout" }));
    expect(screen.getByText(/Keep track of/)).toBeInTheDocument();
  });
});
