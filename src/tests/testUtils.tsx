import "../i18n/index";

import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import nock from "nock";
import { MemoryRouter } from "react-router-dom";

import App from "../App";
import { API_URL } from "../constants/constants";
import customTheme from "../theme";

const queryClient = new QueryClient();

export const APINock = nock(API_URL);

type WrapperProps = {
  children?: React.ReactNode;
  initialEntries?: string[];
};

export const Wrapper = (props: WrapperProps): JSX.Element => {
  const { children = <App />, initialEntries } = props;
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>
  );
};

export const WrapperHook = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
