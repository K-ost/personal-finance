import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TransactionsTable from "..";
import { transactionFactory } from "../../../tests/factories";
import { Wrapper } from "../../../tests/testUtils";

const mockedTransactions = transactionFactory.buildList(3);

describe("Transaction Table", () => {
  it("Rendering when it contains data", () => {
    render(
      <Wrapper>
        <TransactionsTable list={mockedTransactions} />
      </Wrapper>
    );
    expect(screen.getByText(/Recipient/)).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(4);
  });

  it("Rendering is empty", () => {
    render(
      <Wrapper>
        <TransactionsTable list={[]} />
      </Wrapper>
    );
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
    expect(screen.queryAllByRole("row")).toHaveLength(0);
    expect(screen.getByText("Nothing found")).toBeInTheDocument();
  });
});
