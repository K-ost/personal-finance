import { Box, BoxProps, styled } from "@mui/material";

export const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  borderRadius: 12,
  padding: theme.spacing(5),
}));
