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
      }}
    />
  );
};

export default Styles;
