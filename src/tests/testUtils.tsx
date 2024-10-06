import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import nock from "nock";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import "../i18n/index";
import { API_URL } from "../utils/constants";
import App from "../App";

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
