import { GlobalStyles, useTheme } from "@mui/material";

const Styles = (): JSX.Element => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        body: {
          fontFamily: theme.typography.fontFamily,
          margin: 0,
        },
      }}
    />
  );
};

export default Styles;
