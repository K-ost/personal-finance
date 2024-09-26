import { Box } from "@mui/material";
import { transactionPrice } from "../utils/utils";

type AmountProps = {
  amount: number;
};

const Amount = (props: AmountProps): JSX.Element => {
  const { amount } = props;
  const isPositive = amount > 0;
  const result = transactionPrice(amount);

  return (
    <Box
      sx={(theme) => ({
        color: isPositive
          ? theme.palette.custom.secondary.green
          : theme.palette.error.main,
        display: "inline",
      })}
    >
      {result}
    </Box>
  );
};

export default Amount;
