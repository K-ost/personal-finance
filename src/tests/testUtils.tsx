import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import nock from "nock";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import "../i18n/index";
import { API_URL } from "../utils/constants";
import App from "../App";
import { Pot } from "../types";

const queryClient = new QueryClient();

export const APINock = nock(API_URL);

export const Wrapper = ({
  children = <App />,
  initialEntries,
}: {
  children?: React.ReactNode;
  initialEntries?: string[];
}): JSX.Element => (
  <MemoryRouter initialEntries={initialEntries}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  </MemoryRouter>
);

export const WrapperHook = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const createUser = (user: "admin" | "user") => {
  return {
    accessToken: "token",
    message: "",
    user: {
      email: "admin@test.com",
      name: "Admin",
      role: user,
      avatar: "",
      id: 1,
    },
  };
};

export const mockedNewPotBody = {
  name: "New Pot",
  target: 1000,
  theme: "#626070",
  total: 0,
};

export const mockedEditPotBody = (name: string, full?: boolean) => {
  const output: Partial<Pot> = { name, target: 1000, theme: "#277C78" };
  if (full) {
    (output.total = 100), (output.id = 1);
  }
  return output;
};