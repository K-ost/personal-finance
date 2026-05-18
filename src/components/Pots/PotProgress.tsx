import { Typography } from "@mui/material";

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
  const progressValue = getProgressValue(total, target);

  return (
    <>
      <Progress variant="determinate" value={progressValue} range={color} />

      <div className="text-grey-500 flex items-center justify-between mb-10">
        <Typography variant="body2" component="div" fontWeight={700} color={color}>
          {progressValue}%
        </Typography>
        <Typography variant="body2" component="div">
          {targetTitle}
        </Typography>
      </div>
    </>
  );
};

export default PotProgress;
