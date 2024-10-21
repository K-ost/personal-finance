import { Box, BoxProps, styled, Typography } from "@mui/material";
import { BillInfo } from "../hooks/useRecurringBills";
import icon from "../assets/icon-recurring-bills.svg";
import { getLocalPrice } from "../utils/utils";
import { useTranslation } from "react-i18next";

type TotalBillsProps = {
  info: BillInfo;
};

const Div = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 12,
  color: theme.palette.common.white,
  padding: theme.spacing(6),
  minHeight: "100%",
}));

const TotalBills = (props: TotalBillsProps & BoxProps): JSX.Element => {
  const { info } = props;
  const { t } = useTranslation();

  return (
    <Div {...props}>
      <img src={icon} alt="" style={{ display: "block" }} />
      <Typography variant="body1" component="div" sx={{ mt: 8, mb: 3 }}>
        {t("bills.total")}
      </Typography>
      <Typography variant="h1" component="div" sx={{ m: 0 }}>
        {getLocalPrice(
          info.paid.amount + info.upcoming.amount + info.soon.amount
        )}
      </Typography>
    </Div>
  );
};

export default TotalBills;
