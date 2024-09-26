import {
  Box,
  BoxProps,
  IconButton,
  LinearProgress,
  LinearProgressProps,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Btn from "../../ui/Btn";
import ellipsis from "../../assets/icon-ellipsis.svg";

type PotProps = {
  color: string;
};

const PotBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 12,
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5),
  },
}));

const Circle = styled(Box)<BoxProps & { color: string }>(
  ({ theme, color }) => ({
    backgroundColor: color,
    borderRadius: "50%",
    height: 16,
    marginRight: theme.spacing(4),
    width: 16,
  })
);

const Progress = styled(LinearProgress)<
  LinearProgressProps & { range: string }
>(({ theme, range }) => ({
  backgroundColor: theme.palette.custom.beige100,
  borderRadius: 8,
  height: 8,
  marginBottom: 13,
  "& .MuiLinearProgress-bar": {
    backgroundColor: range,
    borderRadius: 8,
  },
}));

const Pot = (props: PotProps): JSX.Element => {
  const { color } = props;
  const theme = useTheme();

  return (
    <PotBox>
      <Stack direction="row" alignItems="center" mb={8}>
        <Circle color={color} />
        <Typography variant="h2" component="div" m={0}>
          Title
        </Typography>

        <IconButton sx={{ ml: "auto", width: 32, padding: 0, height: 32 }}>
          <img src={ellipsis} alt="" />
        </IconButton>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Typography variant="body1" component="div" color="textSecondary">
          Total Saved
        </Typography>
        <Typography variant="h1" m={0} component="div">
          $Amount
        </Typography>
      </Stack>

      <Progress variant="determinate" value={50} range={color} />

      <Stack
        color={theme.palette.custom.grey500}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={10}
      >
        <Typography variant="body2" component="div" fontWeight={700}>
          50%
        </Typography>
        <Typography variant="body2" component="div">
          Target of $2,000
        </Typography>
      </Stack>

      <Stack direction="row">
        <Btn color="secondary" fullWidth sx={{ mr: theme.spacing(4) }}>
          + Add Money
        </Btn>
        <Btn color="secondary" fullWidth>
          Withdraw
        </Btn>
      </Stack>
    </PotBox>
  );
};

export default Pot;
