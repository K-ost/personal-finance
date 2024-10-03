import { beforeAll, describe, expect, it } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { APINock, createUser, Wrapper, WrapperHook } from "./testUtils";
import App from "../App";
import { useAuthStore } from "../store/useAuthStore";
import { useAppStore } from "../store/useAppStore";
import { PotFactory } from "./factories";

const PotsData = PotFactory.buildList(3);

describe("Pots Page", () => {
  beforeAll(() => {
    APINock.get("/pots").reply(200, PotsData);
    const { result: AuthResult } = renderHook(() => useAuthStore(), {
      wrapper: WrapperHook,
    });
    const { result: AppResult } = renderHook(() => useAppStore(), {
      wrapper: WrapperHook,
    });
    AuthResult.current.auth = createUser("admin");
    AppResult.current.lang = "en";
    render(
      <Wrapper initialEntries={["/pots"]}>
        <App />
      </Wrapper>
    );
  });

  it("Translating to Ru", async () => {
    const ruBtn = screen.getByRole("button", { name: "Ru" });
    expect(screen.getByText("Pots")).toBeInTheDocument();

    await userEvent.click(ruBtn);
    expect(screen.getByText("Копилки")).toBeInTheDocument();

    const addNewPot = await screen.findByText("+ Новая Копилка");

    await userEvent.click(addNewPot);
    expect(
      screen.getByText(/Создайте копилку, чтобы установить цели сбережений/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Добавить Копилку")).toBeInTheDocument();
  });
});
