import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import useRecurringBills from "../../hooks/useRecurringBills";
import { Transaction } from "../../types/types";
import BillsItem from "../../ui/BillsItem";
import Wrap from "../../ui/Wrap";
import { getLocalPrice } from "../../utils/utils";

type BillsWidgetProps = {
  data: Transaction[];
};

const BillsWidget = (props: BillsWidgetProps): JSX.Element => {
  const { data } = props;
  const { t } = useTranslation();
  const { info } = useRecurringBills({ data });

  return (
    <Wrap title={t("nav.recurringBills")} alllink="/bills" {...props}>
      <BillsItem type="paid">
        <Typography variant="body1" color="textSecondary">
          {t("bills.paid")}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {getLocalPrice(info.paid.amount)}
        </Typography>
      </BillsItem>
      <BillsItem type="upcoming">
        <Typography variant="body1" color="textSecondary">
          {t("bills.upcoming")}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {getLocalPrice(info.upcoming.amount)}
        </Typography>
      </BillsItem>
      <BillsItem type="soon">
        <Typography variant="body1" color="textSecondary">
          {t("bills.soon")}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {getLocalPrice(info.soon.amount)}
        </Typography>
      </BillsItem>
    </Wrap>
  );
};

export default BillsWidget;
