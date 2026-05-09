import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Wrapper } from "../../tests/testUtils";
import { Session } from "../../types/profileTypes";
import Sessions from ".";

const handler = vi.fn();

const sessions: Session[] = [
  { _id: "1", userId: "1" },
  { _id: "2", userId: "1" },
  { _id: "3", userId: "1" },
];

function setup(sessions: Session[]) {
  return render(
    <Wrapper>
      <Sessions isPending={false} removeSessionsHandler={handler} sessions={sessions} />,
    </Wrapper>,
  );
}

describe("Sessions", () => {
  it("List with delete button", () => {
    setup(sessions);
    const deleteBtn = screen.getByRole("button", { name: "Delete all sessions" });
    expect(deleteBtn).toBeInTheDocument();
  });

  it("List with 1 entity and without delete button", () => {
    setup([sessions[0]]);
    const deleteBtn = screen.queryByRole("button", { name: "Delete all sessions" });
    expect(deleteBtn).not.toBeInTheDocument();
  });
});
