import { Button, styled } from "@mui/material";

export const More = styled(Button)(({ theme }) => ({
  color: theme.palette.custom.grey500,
  padding: 0,
  textTransform: "none",
  "& svg": {
    marginLeft: theme.spacing(3),
    "& path": {
      fill: theme.palette.custom.grey500,
    },
  },
  "&:hover": {
    background: 0,
    color: theme.palette.primary.main,
    "& svg path": {
      fill: theme.palette.primary.main,
    },
  },
}));
