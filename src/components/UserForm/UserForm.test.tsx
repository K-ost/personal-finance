import { render, renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import { useAuthStore } from "../../store/useAuthStore";
import { APINock, Wrapper, WrapperHook } from "../../tests/testUtils";
import Notification from "../../ui/Notification";
import UserForm from ".";

describe("Profile detias form", () => {
  let nameField: HTMLInputElement;
  let avatarField: HTMLInputElement;
  let btn: HTMLButtonElement;

  beforeEach(() => {
    render(
      <Wrapper>
        <UserForm />
        <Notification />
      </Wrapper>,
    );
    nameField = screen.getByRole("textbox", { name: "Name" });
    avatarField = screen.getByRole("searchbox", { name: "Avatar" });
    btn = screen.getByRole("button", { name: "Edit profile" });
  });

  describe("Form state", () => {
    it("Form isn't changed and button disabled", async () => {
      expect(btn.disabled).toBe(true);
    });

    it("Form has been changed and button enabled", async () => {
      await userEvent.type(nameField, "abc");
      await userEvent.type(avatarField, "a");
      expect(btn.disabled).toBe(false);
    });

    it("Form errors after changing", async () => {
      await userEvent.type(nameField, "abc");
      await userEvent.click(btn);
      expect(screen.getByText("Should be at least 4 characters")).toBeInTheDocument();
    });
  });
});
