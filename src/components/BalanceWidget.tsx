import { Grid2, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import Balance from "../ui/Balance";
import { useTranslation } from "react-i18next";
import useGetData from "../hooks/useGetData";
import { BalanceType } from "../types";
import Error from "./Error";
import { BALANCE_URI } from "../utils/constants";

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
      <Grid2 container spacing={isMobile ? 3 : 6}>
        {Array.from(new Array(3)).map((__, index) => (
          <Grid2 size={{ xs: 12, sm: 4 }} key={index}>
            <Skeleton height={120} variant="rounded" />
          </Grid2>
        ))}
      </Grid2>
    );

  if (isError) return <Error />;

  return (
    <div>
      {isSuccess && (
        <Grid2 container spacing={isMobile ? 3 : 6}>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Balance title={t("balances.current")} amount={data.current} dark />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Balance title={t("balances.income")} amount={data.income} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Balance title={t("balances.expenses")} amount={data.expenses} />
          </Grid2>
        </Grid2>
      )}
    </div>
  );
};

export default BalanceWidget;
