import { Box, useTheme } from "@mui/material";
import { transactionPrice } from "../utils/utils";

type AmountProps = {
  amount: number;
};

const Amount = (props: AmountProps): JSX.Element => {
  const { amount } = props;
  const isPositive = amount > 0;
  const theme = useTheme();
  const result = transactionPrice(amount);

  return (
    <Box
      sx={{
        color: isPositive
          ? theme.palette.custom.secondary.green
          : theme.palette.primary.main,
        display: "inline",
      }}
    >
      {result}
    </Box>
  );
};

export default Amount;
