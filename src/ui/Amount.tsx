import { Typography } from "@mui/material";
import { transactionPrice } from "../utils/utils";

type AmountProps = {
  amount: number;
};

const Amount = (props: AmountProps): JSX.Element => {
  const { amount } = props;
  const isPositive = amount > 0;
  const result = transactionPrice(amount);

  return (
    <Typography
      variant="body1"
      fontWeight={700}
      color={isPositive ? "success" : "error"}
    >
      {result}
    </Typography>
  );
};

export default Amount;
