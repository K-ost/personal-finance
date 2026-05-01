import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import { BalanceType } from "../../types/types";
import Balance from "../../ui/Balance";

type BalanceWidgetProps = {
  data: BalanceType;
};

const BalanceWidget = (props: BalanceWidgetProps): JSX.Element => {
  const { data } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Grid container spacing={isMobile ? 3 : 6}>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Balance title={t("balances.current")} amount={data.current} dark />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Balance title={t("balances.income")} amount={data.income} />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Balance title={t("balances.expenses")} amount={data.expenses} />
      </Grid>
    </Grid>
  );
};

export default BalanceWidget;
