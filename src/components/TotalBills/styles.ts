import { Box, styled } from "@mui/material";

export const Div = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 12,
  color: theme.palette.common.white,
  padding: theme.spacing(6),
  minHeight: "100%",
}));
