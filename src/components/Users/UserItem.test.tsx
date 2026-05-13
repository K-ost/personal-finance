import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Wrapper } from "../../tests/testUtils";
import { UserRole } from "../../types/apiTypes";
import UserItem from "./UserItem";

function setup(role: UserRole) {
  render(
    <Wrapper>
      <UserItem user={{ email: "test@test.com", id: "1", name: "Test", role }} />
    </Wrapper>,
  );
}

describe("UserItem", () => {
  it("User without delete button if admin", () => {
    setup("admin");
    expect(screen.queryByRole("button", { name: "Delete user" })).not.toBeInTheDocument();
  });

  it("User with delete button", () => {
    setup("user");
    expect(screen.getByRole("button", { name: "Delete user" })).toBeInTheDocument();
  });
});
