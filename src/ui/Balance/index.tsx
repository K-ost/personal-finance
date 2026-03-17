import { Typography, useMediaQuery, useTheme } from "@mui/material";

import { getLocalPrice } from "../../utils/utils";
import { Item } from "./styles";

type BalanceProps = {
  title: string;
  amount: number;
  dark?: boolean;
};

const Balance = (props: BalanceProps): JSX.Element => {
  const { amount, title, dark } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Item bg={dark ? "true" : undefined}>
      <Typography
        variant={isMobile ? "body2" : "body1"}
        sx={{ mb: isMobile ? 2 : 3 }}
        color={dark ? "primary.contrastText" : "custom.grey500"}
      >
        {title}
      </Typography>
      <Typography variant={isMobile ? "h2" : "h1"} sx={{ m: 0 }}>
        {getLocalPrice(amount)}
      </Typography>
    </Item>
  );
};

export default Balance;
