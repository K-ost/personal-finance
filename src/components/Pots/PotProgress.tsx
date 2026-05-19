import { Typography } from "@mui/material";

import ProgressBar from "../../ui/ProgressBar";
import { getProgressValue } from "../../utils/utils";

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
      <div className="mb-3">
        <ProgressBar color={color} value={progressValue} />
      </div>

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
