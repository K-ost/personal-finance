import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import useRecurringBills from "../../hooks/useRecurringBills";
import { Transaction } from "../../types/types";
import Wrap from "../../ui/Wrap";
import { getLocalPrice } from "../../utils/utils";
import { BillsWidgetItem } from "../BillsTable/styles";

type BillsWidgetProps = {
  data: Transaction[];
};

const BillsWidget = (props: BillsWidgetProps): JSX.Element => {
  const { data } = props;
  const { t } = useTranslation();
  const { info } = useRecurringBills({ data });

  return (
    <Wrap title={t("nav.recurringBills")} alllink="/bills" {...props}>
      <BillsWidgetItem direction="row" sx={{ mb: 3 }} className="paid">
        <Typography variant="body1" color="textSecondary">
          {t("bills.paid")}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {getLocalPrice(info.paid.amount)}
        </Typography>
      </BillsWidgetItem>
      <BillsWidgetItem direction="row" sx={{ mb: 3 }} className="upcoming">
        <Typography variant="body1" color="textSecondary">
          {t("bills.upcoming")}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {getLocalPrice(info.upcoming.amount)}
        </Typography>
      </BillsWidgetItem>
      <BillsWidgetItem direction="row" className="soon">
        <Typography variant="body1" color="textSecondary">
          {t("bills.soon")}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {getLocalPrice(info.soon.amount)}
        </Typography>
      </BillsWidgetItem>
    </Wrap>
  );
};

export default BillsWidget;
