import { Box, BoxProps, LinearProgress, styled } from "@mui/material";

type BudgetProgressProps = BoxProps & { range: string; value: number };

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  borderRadius: 4,
  height: 32,
  padding: theme.spacing(1),
}));

const BudgetProgress = (props: BudgetProgressProps): JSX.Element => {
  const { range, value } = props;
  return (
    <Wrapper {...props}>
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
    </Wrapper>
  );
};

export default BudgetProgress;
