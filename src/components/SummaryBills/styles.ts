import { ListItem, styled } from "@mui/material";

export const Li = styled(ListItem)(({ theme }) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.palette.custom.grey100,
  borderBottomStyle: "solid",
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  display: "flex",
  justifyContent: "space-between",
  "&:first-of-type": {
    paddingTop: 0,
  },
  "&:last-of-type": {
    border: 0,
    paddingBottom: 0,
  },
}));
