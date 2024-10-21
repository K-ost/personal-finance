import { Stack, Typography } from "@mui/material";
import paidIcon from "../../assets/icon-bill-paid.svg";
import dueIcon from "../../assets/icon-bill-due.svg";
import { createBillsDate } from "../../utils/utils";
import { useTranslation } from "react-i18next";

type BillsDateProps = {
  date: Date;
  isPaid: boolean;
  isSoon: boolean;
};

const BillsDate = (props: BillsDateProps): JSX.Element => {
  const { date, isPaid, isSoon } = props;
  const billsDate = createBillsDate(date);
  const { t } = useTranslation();

  return (
    <Stack direction="row" alignItems="center">
      <Typography
        variant="body2"
        color={isPaid ? "success" : "textSecondary"}
        sx={{ mr: 2 }}
      >
        {t("bills.table.monthly")} - {billsDate}
      </Typography>
      {isPaid && <img src={paidIcon} alt="" />}
      {isSoon && <img src={dueIcon} alt="" />}
    </Stack>
  );
};

export default BillsDate;
