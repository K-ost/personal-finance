import {
  Box,
  BoxProps,
  LinearProgress,
  LinearProgressProps,
  styled,
} from "@mui/material";

export const Progress = styled(LinearProgress)<LinearProgressProps & { range: string }>(
  ({ theme, range }) => ({
    backgroundColor: theme.palette.custom.beige100,
    borderRadius: 8,
    height: 8,
    marginBottom: 13,
    "& .MuiLinearProgress-bar": {
      backgroundColor: range,
      borderRadius: 8,
      overflow: "hidden",
    },
  }),
);

export const PotBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 12,
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5),
  },
}));
