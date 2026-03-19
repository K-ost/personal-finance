import { Stack, Typography, useTheme } from "@mui/material";

import { getProgressValue } from "../../utils/utils";
import { Progress } from "./styles";

type PotProgressProps = {
  color: string;
  target: number;
  total: number;
  targetTitle: string;
};

const PotProgress = (props: PotProgressProps): JSX.Element => {
  const { color, target, targetTitle, total } = props;
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
        <Typography variant="body2" component="div" fontWeight={700} color={color}>
          {progressValue}%
        </Typography>
        <Typography variant="body2" component="div">
          {targetTitle}
        </Typography>
      </Stack>
    </>
  );
};

export default PotProgress;
