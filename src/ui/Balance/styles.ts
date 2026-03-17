import { Box, styled } from "@mui/material";

export const Item = styled(Box)<{ bg: "true" | undefined }>(({ theme, bg }) => ({
  backgroundColor: bg ? theme.palette.primary.main : theme.palette.common.white,
  borderRadius: 12,
  color: bg ? theme.palette.common.white : theme.palette.primary.main,
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
  },
}));
