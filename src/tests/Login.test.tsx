import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import { createUser } from "./constants";
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

    await waitFor(() => {
      expect(screen.getByText("Incorrect password"));
    });
  });

  it("Login - successfull", async () => {
    APINock.post("/login", {
      email: "admin@test.com",
      password: "1111",
    }).reply(201, createUser("admin"));

    await userEvent.type(screen.getByTestId("email"), "admin@test.com");
    await userEvent.type(screen.getByTestId("password"), "1111");
    await userEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(screen.getByText("You've been logged"));
    });
  });

  it("Logout", async () => {
    expect(screen.getByText("Overview")).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("logoutBtn"));
    expect(screen.getByText(/Keep track of/)).toBeInTheDocument();
  });
});
