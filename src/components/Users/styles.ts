import { Box, BoxProps, styled } from "@mui/material";

export const Item = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(1),
  minHeight: 44,
}));
