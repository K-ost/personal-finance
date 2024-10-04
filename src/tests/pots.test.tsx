import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { APINock, createUser, Wrapper, WrapperHook } from "./testUtils";
import { useAuthStore } from "../store/useAuthStore";
import { useAppStore } from "../store/useAppStore";
import { PotFactory } from "./factories";

const mockedData = PotFactory.buildList(3);
const mockedPotBody = {
  name: "New Pot",
  target: 1000,
  theme: "#277C78",
  total: 0,
};

describe("Pots Page", () => {
  beforeAll(() => {
    APINock.get("/pots").reply(200, mockedData);
    APINock.post("/pots", mockedPotBody).reply(200, {
      ...mockedPotBody,
      id: 5,
    });
  });

  beforeEach(() => {
    const { result: AuthResult } = renderHook(() => useAuthStore(), {
      wrapper: WrapperHook,
    });
    const { result: AppResult } = renderHook(() => useAppStore(), {
      wrapper: WrapperHook,
    });
    AuthResult.current.auth = createUser("admin");
    AppResult.current.lang = "en";
    render(<Wrapper initialEntries={["/pots"]} />);
  });

  it("Rendering the page", async () => {
    const titles = await screen.findAllByText(/Custom Pot/i);
    expect(await screen.findByText("+ Add New Pot")).toBeInTheDocument();
    titles.forEach((el) => expect(el).toBeInTheDocument());
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

  it("Create new pot", async () => {
    const addNewPot = await screen.findByText("+ Add New Pot");
    await userEvent.click(addNewPot);
    expect(screen.getByText("Add New Pot")).toBeInTheDocument();
    const btn = screen.getByRole("button", { name: "Add Pot" });

    await userEvent.type(screen.getByTestId("name"), "New Pot");
    await userEvent.type(screen.getByTestId("target"), "1000");
    await userEvent.click(btn);

    await waitFor(() => {
      expect(screen.getByText(/'New Pot' has been added/)).toBeInTheDocument();
    });
  });
});
