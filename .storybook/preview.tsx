import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react-vite";

import Styles from "../src/components/Styles";
import customTheme from "../src/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Styles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
