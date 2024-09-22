import { GlobalStyles, useTheme } from "@mui/material";

const Styles = (): JSX.Element => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        body: {
          color: theme.palette.custom.grey900,
          fontFamily: theme.typography.fontFamily,
          margin: 0,
        },
        a: {
          color: theme.palette.primary.main,
          textDecoration: "underline",
          "&:hover": {
            textDecoration: "none",
          },
        },
      }}
    />
  );
};

export default Styles;
