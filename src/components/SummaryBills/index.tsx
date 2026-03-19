import { List, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { BillInfo } from "../../hooks/useRecurringBills";
import Wrap from "../../ui/Wrap";
import { getLocalPrice } from "../../utils/utils";
import { Li } from "./styles";

type SummaryBillsProps = {
  info: BillInfo;
};

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
          <Typography variant="body2" component="div" color="primary" fontWeight={700}>
            {info.paid.length} ({getLocalPrice(info.paid.amount)})
          </Typography>
        </Li>
        <Li>
          <Typography variant="body2" component="div" color="textSecondary">
            {t("bills.upcoming")}
          </Typography>
          <Typography variant="body2" component="div" color="primary" fontWeight={700}>
            {info.upcoming.length} ({getLocalPrice(info.upcoming.amount)})
          </Typography>
        </Li>
        <Li>
          <Typography variant="body2" component="div" color="error">
            {t("bills.soon")}
          </Typography>
          <Typography variant="body2" component="div" color="error" fontWeight={700}>
            {info.soon.length} ({getLocalPrice(info.soon.amount)})
          </Typography>
        </Li>
      </List>
    </Wrap>
  );
};

export default SummaryBills;
