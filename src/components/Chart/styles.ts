import { Box, BoxProps, styled } from "@mui/material";

export const ChartContainer = styled(Box)<BoxProps>(() => ({
  textAlign: "center",
}));

export const ChartInner = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  position: "relative",
  "&::after": {
    backgroundColor: theme.palette.common.white,
    borderRadius: "50%",
    content: '""',
    height: 188,
    position: "absolute",
    width: 188,
    left: 26,
    top: 26,
    opacity: 0.25,
  },
}));

export const ChartText = styled(Box)<BoxProps>(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: 170,
  width: 170,
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 10,
}));
