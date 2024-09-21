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
  palette: {
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
        red: "#C94736",
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
