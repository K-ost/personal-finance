import { BoxProps, Typography, useMediaQuery, useTheme } from "@mui/material";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import icon from "../../assets/icon-recurring-bills.svg";
import { BillInfo } from "../../hooks/useRecurringBills";
import { getLocalPrice } from "../../utils/utils";
import { Div } from "./styles";

type TotalBillsProps = {
  info: BillInfo;
};

const TotalBills = (props: TotalBillsProps & BoxProps): JSX.Element => {
  const { info } = props;
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Div {...props}>
      <img src={icon} alt="" style={{ display: "block" }} />
      <Typography variant="body1" component="div" sx={{ mt: 8, mb: 3 }}>
        {t("bills.total")}
      </Typography>
      <Typography variant={isMobile ? "h2" : "h1"} component="div" sx={{ m: 0 }}>
        {getLocalPrice(info.paid.amount + info.upcoming.amount + info.soon.amount)}
      </Typography>
    </Div>
  );
};

export default memo(TotalBills);
