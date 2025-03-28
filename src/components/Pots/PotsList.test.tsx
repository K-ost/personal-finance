import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PotsList from ".";
import { Wrapper } from "../../tests/testUtils";
import { potFactory } from "../../tests/factories";

const pots = potFactory.buildList(3);

describe("Pots List", () => {
  it("Empty list", () => {
    render(
      <Wrapper>
        <PotsList data={[]} />
      </Wrapper>
    );
    expect(screen.getByRole("alert", { name: "No data" })).toBeInTheDocument();
    expect(screen.getByText("Add data to see this on this page")).toBeInTheDocument();
  });

  it("List renders", () => {
    render(
      <Wrapper>
        <PotsList data={pots} />
      </Wrapper>
    );
    expect(screen.getAllByRole("button", { name: "+ Add Money" }));
    expect(screen.getAllByRole("button", { name: "Withdraw" }));
  });
});
