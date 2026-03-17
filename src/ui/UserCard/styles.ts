import { Box, BoxProps, styled } from "@mui/material";

export const Card = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  color: theme.palette.primary.main,
  display: "flex",
  "& img": {
    display: "block",
    borderRadius: "50%",
    height: 40,
    marginRight: theme.spacing(4),
    width: 40,
  },
}));
