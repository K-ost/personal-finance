import {
  LinearProgress,
  LinearProgressProps,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { getLocalPrice, getProgressValue } from "../../utils/utils";

type PotProgressProps = {
  color: string;
  target: number;
  total: number;
};

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

const PotProgress = (props: PotProgressProps): JSX.Element => {
  const { color, target, total } = props;
  const theme = useTheme();

  const progressValue = getProgressValue(total, target);

  return (
    <>
      <Progress variant="determinate" value={progressValue} range={color} />

      <Stack
        color={theme.palette.custom.grey500}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={10}
      >
        <Typography variant="body2" component="div" fontWeight={700}>
          ${progressValue}
        </Typography>
        <Typography variant="body2" component="div">
          Target of {getLocalPrice(target, true)}
        </Typography>
      </Stack>
    </>
  );
};

export default PotProgress;
