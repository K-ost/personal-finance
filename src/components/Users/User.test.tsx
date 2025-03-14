import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { userFactory } from "../../tests/factories";
import UsersList from "./UsersList";

const users = userFactory.buildList(3);

describe("Users component", () => {
  it("Users list", async () => {
    render(<UsersList data={users} />);
    expect(screen.getAllByText("user")).toBeDefined();
  });
});
