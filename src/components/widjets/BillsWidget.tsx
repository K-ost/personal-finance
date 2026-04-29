import { BoxProps, Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import useGetData from "../../hooks/useGetData";
import useRecurringBills from "../../hooks/useRecurringBills";
import { ServerResponse } from "../../types/apiTypes";
import { Transaction } from "../../types/types";
import Error from "../../ui/Error";
import Wrap from "../../ui/Wrap";
import { getLocalPrice } from "../../utils/utils";
import { BillsWidgetItem } from "../BillsTable/styles";

const BillsWidget = (props: BoxProps): JSX.Element => {
  const { t } = useTranslation();

  const { data, isError, isLoading, isSuccess } = useGetData<ServerResponse<Transaction>>(
    {
      key: ["billsWidjet"],
      uri: "/transactions?recurring=true",
    },
  );

  const { info } = useRecurringBills({
    data: isSuccess ? data.data : [],
  });

  if (isLoading) return <Skeleton height={320} variant="rounded" />;
  if (isError) return <Error />;

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
