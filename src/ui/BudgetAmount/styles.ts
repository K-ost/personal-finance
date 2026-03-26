import { Box, styled } from "@mui/material";

export const Div = styled(Box)<{ big?: string }>(({ theme, big }) => ({
  backgroundColor: big ? theme.palette.custom.beige100 : "none",
  borderRadius: 12,
  display: "flex",
  flexGrow: 1,
  padding: big ? `${theme.spacing(4)} ${theme.spacing(6)}` : 0,
  position: "relative",
}));

export const Line = styled(Box)<{ bg?: string }>(({ theme, bg }) => ({
  backgroundColor: bg ? bg : theme.palette.custom.beige100,
  borderRadius: 4,
  minWidth: 4,
  marginRight: theme.spacing(4),
}));
