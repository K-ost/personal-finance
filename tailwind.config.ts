import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    screens: {
      sm: "750px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', "sans-serif"],
      },
    },
  },
};

export default config;
