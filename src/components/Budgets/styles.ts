import { Box, BoxProps, styled } from "@mui/material";

export const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  borderRadius: 12,
  padding: theme.spacing(5),
}));

export const WrapperProgress = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  borderRadius: 4,
  height: 32,
  padding: theme.spacing(1),
}));
