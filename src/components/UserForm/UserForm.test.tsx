import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import UserForm from ".";
import { APINock, Wrapper, WrapperHook } from "../../tests/testUtils";
import Notification from "../../ui/Notification";
import userEvent from "@testing-library/user-event";
import { useAuthStore } from "../../store/useAuthStore";

describe("Profile detias form", () => {
  let nameField: HTMLInputElement;
  let avatarField: HTMLInputElement;
  let btn: HTMLButtonElement;

  beforeEach(() => {
    render(
      <Wrapper>
        <UserForm />
        <Notification />
      </Wrapper>
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

  describe("Server responses", () => {
    beforeEach(() => {
      APINock.patch("/users/1", {
        name: "Test",
        avatar: "http://test.com/avatar.jpg",
      }).reply(201, {
        msg: "The entity has been edited",
        data: { name: "Test", avatar: "http://test.com/avatar.jpg" },
      });
    });

    it("Profile has been updated", async () => {
      const { result } = renderHook(() => useAuthStore(), {
        wrapper: WrapperHook,
      });
      result.current.userId = "1";
      result.current.avatar = "";
      result.current.name = "Name";

      await userEvent.type(nameField, "Test");
      await userEvent.type(avatarField, "http://test.com/avatar.jpg");
      await userEvent.click(btn);

      expect(result.current.avatar).toStrictEqual("");
      expect(result.current.name).toStrictEqual("Name");

      await waitFor(() => {
        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByText("The entity has been edited")).toBeInTheDocument();
        expect(result.current.avatar).toStrictEqual("http://test.com/avatar.jpg");
        expect(result.current.name).toStrictEqual("Test");
      });
    });
  });
});
