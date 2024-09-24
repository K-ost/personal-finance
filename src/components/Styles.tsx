import { GlobalStyles, useTheme } from "@mui/material";

const Styles = (): JSX.Element => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
        },
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
        ".MuiPaper-root.MuiPopover-paper": {
          boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
          borderRadius: 8,
          marginTop: theme.spacing(4),
          maxHeight: 300,
          "& .MuiList-root": {
            padding: 0,
          },
          "& .MuiMenuItem-root": {
            padding: `${theme.spacing(3)} ${theme.spacing(5)}`,
            "&::after": {
              backgroundColor: theme.palette.custom.grey100,
              content: '""',
              display: "block",
              height: 1,
              position: "absolute",
              left: 20,
              right: 20,
              bottom: 0,
            },
            "&:last-child::after": {
              content: "none",
              display: "none",
            },
            "&.Mui-selected": {
              fontWeight: 700,
            },
          },
        },
      }}
    />
  );
};

export default Styles;
