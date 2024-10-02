import { Box, BoxProps, styled, Typography } from "@mui/material";
import { getLocalPrice } from "../../utils/utils";

type BudgetAmountProps = {
  amount: number;
  color?: string;
  title: string;
};

const Div = styled(Box)<BoxProps & { color?: string }>(({ theme, color }) => ({
  paddingLeft: 20,
  position: "relative",
  flexGrow: 1,
  "&::before": {
    backgroundColor: color ? color : theme.palette.custom.beige100,
    borderRadius: 4,
    content: '""',
    display: "block",
    width: 4,
    left: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
  },
}));

const BudgetAmount = (props: BudgetAmountProps): JSX.Element => {
  const { amount, title, color } = props;
  return (
    <Div color={color}>
      <Typography
        variant="body2"
        color="textSecondary"
        component="div"
        sx={{ mb: 1 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="primary"
        component="div"
        fontWeight={700}
      >
        {getLocalPrice(amount)}
      </Typography>
    </Div>
  );
};

export default BudgetAmount;
