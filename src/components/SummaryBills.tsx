import { List, ListItem, styled, Typography } from "@mui/material";
import Wrap from "../ui/Wrap";
import { BillInfo } from "../hooks/useRecurringBills";
import { getLocalPrice } from "../utils/utils";
import { useTranslation } from "react-i18next";

type SummaryBillsProps = {
  info: BillInfo;
};

const Li = styled(ListItem)(({ theme }) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.palette.custom.grey100,
  borderBottomStyle: "solid",
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  display: "flex",
  justifyContent: "space-between",
  "&:first-of-type": {
    paddingTop: 0,
  },
  "&:last-of-type": {
    border: 0,
    paddingBottom: 0,
  },
}));

const SummaryBills = (props: SummaryBillsProps): JSX.Element => {
  const { info } = props;
  const { t } = useTranslation();

  return (
    <Wrap sx={{ p: 5 }}>
      <Typography variant="h3" sx={{ mb: 5 }}>
        {t("bills.summary")}
      </Typography>
      <List>
        <Li>
          <Typography variant="body2" component="div" color="textSecondary">
            {t("bills.paid")}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            color="primary"
            fontWeight={700}
          >
            {info.paid.length} ({getLocalPrice(info.paid.amount)})
          </Typography>
        </Li>
        <Li>
          <Typography variant="body2" component="div" color="textSecondary">
            {t("bills.upcoming")}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            color="primary"
            fontWeight={700}
          >
            {info.upcoming.length} ({getLocalPrice(info.upcoming.amount)})
          </Typography>
        </Li>
        <Li>
          <Typography variant="body2" component="div" color="error">
            {t("bills.soon")}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            color="error"
            fontWeight={700}
          >
            {info.soon.length} ({getLocalPrice(info.soon.amount)})
          </Typography>
        </Li>
      </List>
    </Wrap>
  );
};

export default SummaryBills;
