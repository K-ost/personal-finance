import { Stack, styled } from "@mui/material";

export const BillsWidgetItem = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  borderRadius: 8,
  borderLeftWidth: 4,
  borderLeftStyle: "solid",
  justifyContent: "space-between",
  padding: `${theme.spacing(5)} ${theme.spacing(4)}`,
  position: "relative",
  "&.paid": {
    borderLeftColor: theme.palette.custom.secondary.green,
  },
  "&.upcoming": {
    borderLeftColor: theme.palette.custom.secondary.yellow,
  },
  "&.soon": {
    borderLeftColor: theme.palette.custom.secondary.cyan,
  },
}));
