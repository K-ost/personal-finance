import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useLocation } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { Wrapper } from "../../tests/testUtils";
import Search from ".";

const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location">{location.search}</div>;
};

function setup(query?: string[]) {
  const result = render(
    <Wrapper initialEntries={query}>
      <Search />
      <LocationDisplay />
    </Wrapper>,
  );
  const input = screen.getByRole("searchbox", { name: "Search" });
  return { input, ...result };
}

describe("Search component", () => {
  it("Taking a value from url if it exists", () => {
    const { input } = setup(["/?q=test"]);
    expect(input).toHaveValue("test");
  });

  it("Changing a state value while typing", async () => {
    const { input } = setup();
    await userEvent.type(input, "abc");
    expect(input).toHaveValue("abc");
  });

  it("Updating a query with debounce", async () => {
    const { input } = setup();
    await userEvent.type(input, "test");
    expect(screen.getByTestId("location").textContent).toBe("");
    await waitFor(() => {
      expect(screen.getByTestId("location").textContent).toBe("?q=test");
    });
  });

  it("Removing q if the query is empty", async () => {
    const { input } = setup(["/?q=test"]);
    expect(screen.getByTestId("location").textContent).toBe("?q=test");
    await userEvent.clear(input);
    await waitFor(() => {
      expect(screen.getByTestId("location").textContent).toBe("");
    });
  });

  it("Doesn't break other query parameters", async () => {
    const { input } = setup(["/?page=2"]);
    expect(screen.getByTestId("location").textContent).toBe("?page=2");
    await userEvent.type(input, "search");
    await waitFor(() => {
      expect(screen.getByTestId("location").textContent).toBe("?page=2&q=search");
    });
    await userEvent.clear(input);
    await waitFor(() => {
      expect(screen.getByTestId("location").textContent).toBe("?page=2");
    });
  });
});
