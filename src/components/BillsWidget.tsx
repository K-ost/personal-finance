import { BoxProps, Skeleton, Stack, styled, Typography } from "@mui/material";
import useGetData from "../hooks/useGetData";
import { Transaction } from "../types";
import Error from "./Error";
import Wrap from "../ui/Wrap";
import { useTranslation } from "react-i18next";
import useRecurringBills from "../hooks/useRecurringBills";
import { getLocalPrice } from "../utils/utils";

const Item = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  borderRadius: 8,
  borderLeftWidth: 4,
  borderLeftStyle: "solid",
  justifyContent: "space-between",
  padding: `${theme.spacing(5)} ${theme.spacing(4)}`,
  position: "relative",
  "&.paid": {
    borderLeftColor: theme.palette.custom.secondary.green,
  },
  "&.upcoming": {
    borderLeftColor: theme.palette.custom.secondary.yellow,
  },
  "&.soon": {
    borderLeftColor: theme.palette.custom.secondary.cyan,
  },
}));

const BillsWidget = (props: BoxProps): JSX.Element => {
  const { t } = useTranslation();

  const { data, isError, isLoading, isSuccess } = useGetData<Transaction[]>({
    key: ["bills"],
    uri: "/transactions?recurring=true",
  });

  const { info } = useRecurringBills({
    data: isSuccess ? data : [],
  });

  if (isLoading) return <Skeleton height={320} variant="rounded" />;
  if (isError) return <Error />;

  return (
    <Wrap title={t("nav.recurringBills")} alllink="/bills" {...props}>
      <Item direction="row" sx={{ mb: 3 }} className="paid">
        <Typography variant="body1" color="textSecondary">
          {t("bills.paid")}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {getLocalPrice(info.paid.amount)}
        </Typography>
      </Item>
      <Item direction="row" sx={{ mb: 3 }} className="upcoming">
        <Typography variant="body1" color="textSecondary">
          {t("bills.upcoming")}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {getLocalPrice(info.upcoming.amount)}
        </Typography>
      </Item>
      <Item direction="row" className="soon">
        <Typography variant="body1" color="textSecondary">
          {t("bills.soon")}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {getLocalPrice(info.soon.amount)}
        </Typography>
      </Item>
    </Wrap>
  );
};

export default BillsWidget;
