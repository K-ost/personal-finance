import { Box, BoxProps, styled } from "@mui/material";

export const Item = styled(Box)<BoxProps & { bg: string }>(({ theme, bg }) => ({
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: theme.palette.custom.grey100,
  borderBottomStyle: "solid",
  display: "flex",
  paddingLeft: 20,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  position: "relative",
  "&::before": {
    backgroundColor: bg,
    borderRadius: 4,
    content: '""',
    display: "block",
    width: 4,
    height: 21,
    left: 0,
    position: "absolute",
  },
  "&:first-of-type": {
    paddingTop: 0,
  },
  "&:last-of-type": {
    border: 0,
    paddingBottom: 0,
  },
}));
