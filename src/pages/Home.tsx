import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";
import BalanceLoading from "../components/widjets/BalanceLoading";
import BalanceWidget from "../components/widjets/BalanceWidget";
import BillsWidget from "../components/widjets/BillsWidget";
import BudgetsWidget from "../components/widjets/BudgetsWidget";
import PotsWidjet from "../components/widjets/PotsWidjet";
import TransActionsWidjet from "../components/widjets/TransActWidjet";
import useGetData from "../hooks/useGetData";
import useUpdateRefresh from "../hooks/useUpdateRefresh";
import { useAuthStore, useUserId } from "../store/useAuthStore";
import { useIsExpired } from "../store/useRefreshStore";
import { ServerResponse } from "../types/apiTypes";
import { BalanceType, Budget, Pot, Transaction } from "../types/types";
import Error from "../ui/Error";

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const user = useAuthStore((state) => state.user);
  const isExpired = useIsExpired();
  const userId = useUserId();

  const {
    data: balanceData,
    isSuccess: balanceIsSuccess,
    isLoading: balanceIsLoading,
    isError: balanceIsError,
    error: balanceError,
  } = useGetData<BalanceType>({
    key: ["balance"],
    uri: "/balance",
    enabled: !isExpired,
  });

  const {
    data: potsData,
    error: potsError,
    isLoading: potsIsLoading,
    isSuccess: potsIsSuccess,
  } = useGetData<Pot[]>({
    key: ["potsWidjet"],
    uri: `/pots?userId=${userId}`,
    enabled: !isExpired,
  });

  const {
    data: transData,
    error: transError,
    isLoading: transIsLoading,
    isSuccess: transIsSuccess,
  } = useGetData<ServerResponse<Transaction>>({
    key: ["transactionsWidjet"],
    uri: "/transactions?limit=5",
    enabled: !isExpired,
  });

  const {
    data: budgetsData,
    error: budgetsError,
    isLoading: budgetsIsLoading,
    isSuccess: budgetsIsSuccess,
  } = useGetData<Budget[]>({
    key: ["budgetsWidjet"],
    uri: `/budgets?userId=${userId}`,
    enabled: !isExpired,
  });

  const {
    data: billsData,
    error: billsError,
    isLoading: billsIsLoading,
    isSuccess: billsIsSuccess,
  } = useGetData<ServerResponse<Transaction>>({
    key: ["billsWidjet"],
    uri: "/transactions?recurring=true",
    enabled: !isExpired,
  });

  useUpdateRefresh({
    error: balanceError?.message ?? "",
    isError: balanceIsError,
  });

  return (
    <MainLayout title={t("nav.overview")}>
      <Grid container spacing={6}>
        <Grid size={12}>
          <Typography variant="body1" mb={4}>
            Hi, {user?.name}, ({user?.email})
          </Typography>
          {balanceIsSuccess && <BalanceWidget data={balanceData} />}
          {balanceIsLoading && <BalanceLoading />}
          {balanceError && <Error text={balanceError.message} />}
        </Grid>
        <Grid size={{ xs: 12, xl: 7 }}>
          <Box mb={6}>
            {potsIsSuccess && <PotsWidjet data={potsData} />}
            {potsIsLoading && <Skeleton height={215} variant="rounded" sx={{ mb: 6 }} />}
            {potsError && <Error text={potsError.message} />}
          </Box>
          {transIsSuccess && <TransActionsWidjet data={transData.data} />}
          {transIsLoading && <Skeleton height={460} variant="rounded" />}
          {transError && <Error text={transError.message} />}
        </Grid>
        <Grid size={{ xs: 12, xl: 5 }}>
          <Box mb={6}>
            {budgetsIsSuccess && <BudgetsWidget data={budgetsData} />}
            {budgetsIsLoading && (
              <Skeleton height={350} variant="rounded" sx={{ mb: 6 }} />
            )}
            {budgetsError && <Error text={budgetsError.message} />}
          </Box>
          {billsIsSuccess && <BillsWidget data={billsData.data} />}
          {billsIsLoading && <Skeleton height={320} variant="rounded" />}
          {billsError && <Error text={billsError.message} />}
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
