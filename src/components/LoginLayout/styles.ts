import { Box, BoxProps, styled } from "@mui/material";

export const Layout = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  boxSizing: "border-box",
  display: "flex",
  height: "100%",
  padding: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: 0,
  },
}));

export const LeftCol = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 12,
  color: theme.palette.common.white,
  display: "flex",
  flexDirection: "column",
  marginRight: theme.spacing(5),
  overflow: "hidden",
  padding: theme.spacing(10),
  position: "relative",
  width: 560,
  "& img.bg": {
    display: "block",
    position: "absolute",
    width: "100%",
    left: 0,
    top: 0,
  },
  [theme.breakpoints.down("lg")]: {
    width: 440,
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: "0 0 12px 12px",
    margin: 0,
    padding: 24,
    width: "auto",
    textAlign: "center",
    "& img.bg": {
      display: "none",
    },
  },
}));

export const LeftColText = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const RightCol = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
}));
