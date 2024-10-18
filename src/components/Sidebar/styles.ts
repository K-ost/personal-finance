import { Box, BoxProps, duration, styled } from "@mui/material";
import { sideWidth, sideWidthMin } from "./constants";

type SidebarProps = {
  open: boolean;
};

export const Aside = styled(Box)<SidebarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "0 24px 24px 0",
  minWidth: open ? sideWidth : sideWidthMin,
  maxWidth: open ? sideWidth : sideWidthMin,
  overflow: "hidden",
  transitionProperty: "all",
  transitionDuration: `${duration}ms`,
  transitionTimingFunction: "ease-in-out",
  [theme.breakpoints.down("lg")]: {
    borderRadius: "8px 8px 0 0",
    minWidth: 0,
    maxWidth: "none",
    overflow: "visible",
    order: 2,
    transition: "none",
  },
}));

export const AsideInner = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingBottom: theme.spacing(6),
  paddingRight: theme.spacing(6),
  width: sideWidth,
  [theme.breakpoints.down("lg")]: {
    display: "block",
    height: "auto",
    padding: "8px 40px 0",
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px 16px 0",
  },
}));
