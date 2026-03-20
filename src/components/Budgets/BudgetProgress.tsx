import { BoxProps, LinearProgress } from "@mui/material";

import { WrapperProgress } from "./styles";

type BudgetProgressProps = BoxProps & { range: string; value: number };

const BudgetProgress = (props: BudgetProgressProps): JSX.Element => {
  const { range, value } = props;
  return (
    <WrapperProgress {...props}>
      <LinearProgress
        sx={(theme) => ({
          backgroundColor: theme.palette.custom.beige100,
          borderRadius: 1,
          height: 24,
          "& .MuiLinearProgress-bar": {
            backgroundColor: range,
            borderRadius: 1,
          },
        })}
        value={value}
        variant="determinate"
      />
    </WrapperProgress>
  );
};

export default BudgetProgress;
