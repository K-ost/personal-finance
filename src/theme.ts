import { createTheme } from "@mui/material";
import { CustomPalette } from "./types";

declare module "@mui/material/styles" {
  interface Palette {
    custom: CustomPalette;
  }
  interface PaletteOptions {
    custom: CustomPalette;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#201F24",
      light: "#696868",
      contrastText: "#ffffff",
      dark: "#696868",
    },
    secondary: {
      main: "#F8F4F0",
      contrastText: "#201F24",
      dark: "#ffffff",
    },
    text: {
      primary: "#201F24",
      secondary: "#98908B",
    },
    error: {
      main: "#C94736",
      contrastText: "#fff",
      dark: "#D46C5E",
    },
    custom: {
      beige500: "#98908B",
      beige100: "#F8F4F0",
      grey900: "#201F24",
      grey500: "#696868",
      grey300: "#B3B3B3",
      grey100: "#F2F2F2",
      secondary: {
        green: "#277C78",
        yellow: "#F2CDAC",
        cyan: "#82C9D7",
        navy: "#626070",
        purple: "#826CB0",
      },
      other: {
        army: "#7F9161",
        blue: "#3F82B2",
        brown: "#93674F",
        gold: "#CAB361",
        magenta: "#934F6F",
        navy: "#97A0AC",
        orange: "#BE6C49",
        purple: "#AF81BA",
        turquoise: "#597C7C",
      },
    },
  },
  typography: {
    fontFamily: '"Public Sans", sans-serif',
    h1: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: "120%",
      marginBottom: 32,
    },
    h2: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "120%",
    },
    h3: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: "150%",
    },
    body1: {
      fontSize: 14,
      lineHeight: "150%",
    },
    body2: {
      fontSize: 12,
      lineHeight: "150%",
    },
    fontSize: 14,
    fontWeightBold: 700,
  },
  spacing: 4,
});
