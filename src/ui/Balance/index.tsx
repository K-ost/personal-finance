import { Typography, useMediaQuery, useTheme } from "@mui/material";

import { getLocalPrice } from "../../utils/utils";

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
    <div className={`bg-${dark ? "primary" : "white"} rounded-xl p-4 sm:p-6`}>
      <Typography
        variant={isMobile ? "body2" : "body1"}
        sx={{ mb: isMobile ? 2 : 3 }}
        color={dark ? "primary.contrastText" : "custom.grey500"}
      >
        {title}
      </Typography>
      <Typography
        variant={isMobile ? "h2" : "h1"}
        sx={{ m: 0 }}
        color={dark ? "primary.contrastText" : "primary.white"}
      >
        {getLocalPrice(amount)}
      </Typography>
    </div>
  );
};

export default Balance;
