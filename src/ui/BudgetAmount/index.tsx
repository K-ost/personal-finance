import { BoxProps, Typography, useMediaQuery, useTheme } from "@mui/material";

import icon from "../../assets/icon-pot.svg";
import { getLocalPrice } from "../../utils/utils";

type BudgetAmountProps = BoxProps & {
  amount: number;
  title: string;
  big?: "true";
  color?: string;
};

const BudgetAmount = (props: BudgetAmountProps): JSX.Element => {
  const { amount, title, color, big } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      className={`flex flex-1 relative rounded-xl ${big ? "bg-beige-100 px-6 py-4" : ""}`}
    >
      {big ? (
        <img src={icon} alt="" className="mr-5" />
      ) : (
        <div
          className="rounded-sm min-w-1 mr-4 bg-beige-100"
          style={{ backgroundColor: color }}
        ></div>
      )}
      <div>
        <Typography
          variant={big ? "body1" : "body2"}
          color="textSecondary"
          component="div"
          sx={{ mb: big && !isMobile ? 3 : isMobile && big ? 1 : 1 }}
        >
          {title}
        </Typography>
        <Typography
          variant={big && !isMobile ? "h1" : isMobile && big ? "h2" : "body1"}
          color="primary"
          component="div"
          fontWeight={700}
          sx={{ m: 0 }}
        >
          {getLocalPrice(amount, big ? true : false)}
        </Typography>
      </div>
    </div>
  );
};

export default BudgetAmount;
