import { Box, BoxProps, styled } from "@mui/material";

export const Layout = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  display: "flex",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const LayoutContent = styled(Box)<BoxProps>(() => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "scroll",
}));

export const LayoutTop = styled(Box)<BoxProps>(({ theme }) => ({
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: theme.palette.custom.beige300,
  display: "flex",
  alignItems: "center",
  padding: `${theme.spacing(3)} ${theme.spacing(10)}`,
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  },
}));

export const LayoutBody = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  padding: `${theme.spacing(8)} ${theme.spacing(10)}`,
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(4)} ${theme.spacing(4)}`,
  },
}));
