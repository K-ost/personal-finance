import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { APINock, Wrapper, WrapperHook } from "../../tests/testUtils";
import ChangePass from ".";
import userEvent from "@testing-library/user-event";
import Notification from "../../ui/Notification";
import { useAuthStore } from "../../store/useAuthStore";

describe("Change Password", () => {
  let oldPass: any;
  let newPass: any;
  let btn: any;

  beforeEach(() => {
    render(
      <Wrapper>
        <ChangePass />
        <Notification />
      </Wrapper>
    );
    oldPass = screen.getByRole("textbox", { name: "Old password" });
    newPass = screen.getByRole("textbox", { name: "New password" });
    btn = screen.getByRole("button", { name: "Change password" });
  });

  describe("Form State", () => {
    it("Default state of button is disabled", () => {
      expect(btn.disabled).toBe(true);
    });

    it("Button's state is changed while typing", async () => {
      await userEvent.type(oldPass, "test");
      expect(btn.disabled).toBe(false);
    });
  });

  describe("Form errors", () => {
    it("Short password and empty field", async () => {
      await userEvent.type(oldPass, "111");
      await userEvent.click(btn);
      expect(screen.getByText("Should have 6 or more characters")).toBeDefined();
      expect(screen.getByText("Required field")).toBeDefined();
    });

    it("New password matches the old one", async () => {
      await userEvent.type(oldPass, "111111");
      await userEvent.type(newPass, "111111");
      await userEvent.click(btn);
      expect(screen.getByText("New password should be different")).toBeDefined();
    });
  });

  describe("Server responses", () => {
    beforeAll(() => {
      const { result } = renderHook(() => useAuthStore(), {
        wrapper: WrapperHook,
      });
      result.current.userId = "1";
    });

    it("Incorrect password", async () => {
      APINock.patch("/users/password/1", {
        oldPass: "000000",
        newPass: "111111",
      }).reply(403, { msg: "Incorrect password" });

      await userEvent.type(oldPass, "000000");
      await userEvent.type(newPass, "111111");
      await userEvent.click(btn);

      await waitFor(() => {
        expect(screen.getByText("Incorrect password")).toBeDefined();
      });
    });

    it("Password has been changed", async () => {
      APINock.patch("/users/password/1", {
        oldPass: "oldpassword",
        newPass: "newpassword",
      }).reply(201, { msg: "Password has been changed" });

      await userEvent.type(oldPass, "oldpassword");
      await userEvent.type(newPass, "newpassword");
      await userEvent.click(btn);

      await waitFor(() => {
        expect(screen.getByText("Password has been changed")).toBeDefined();
      });
    });
  });
});
