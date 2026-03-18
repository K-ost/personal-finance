import { Grid, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import { BALANCE_URI } from "../constants/constants";
import useGetData from "../hooks/useGetData";
import { BalanceType } from "../types/types";
import Balance from "../ui/Balance";
import Error from "../ui/Error";

const BalanceWidget = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const { data, isSuccess, isLoading, isError } = useGetData<BalanceType>({
    key: ["balance"],
    uri: BALANCE_URI,
  });

  if (isLoading)
    return (
      <Grid container spacing={isMobile ? 3 : 6}>
        {Array.from(new Array(3)).map((__, index) => (
          <Grid size={{ xs: 12, sm: 4 }} key={index}>
            <Skeleton height={120} variant="rounded" />
          </Grid>
        ))}
      </Grid>
    );

  if (isError) return <Error />;

  return (
    <div>
      {isSuccess && (
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
      )}
    </div>
  );
};

export default BalanceWidget;
