import { Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";
import BalanceLoading from "../components/widjets/BalanceLoading";
import BalanceWidget from "../components/widjets/BalanceWidget";
import BillsWidget from "../components/widjets/BillsWidget";
import BudgetsWidget from "../components/widjets/BudgetsWidget";
import PotsWidjet from "../components/widjets/PotsWidjet";
import TransActionsWidjet from "../components/widjets/TransActWidjet";
import useGetData from "../hooks/useGetData";
import { useAuthStore, useUserId } from "../store/useAuthStore";
import { ServerResponse } from "../types/apiTypes";
import { BalanceType, Budget, Pot, Transaction } from "../types/types";
import Error from "../ui/Error";

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const user = useAuthStore((state) => state.user);
  const userId = useUserId();

  const {
    data: balanceData,
    isSuccess: balanceIsSuccess,
    isLoading: balanceIsLoading,
    error: balanceError,
  } = useGetData<BalanceType>({
    key: ["balance"],
    uri: "/balance",
  });

  const {
    data: potsData,
    error: potsError,
    isLoading: potsIsLoading,
    isSuccess: potsIsSuccess,
  } = useGetData<Pot[]>({
    key: ["potsWidjet"],
    uri: `/pots?userId=${userId}`,
    enabled: balanceIsSuccess,
  });

  const {
    data: transData,
    error: transError,
    isLoading: transIsLoading,
    isSuccess: transIsSuccess,
  } = useGetData<ServerResponse<Transaction>>({
    key: ["transactionsWidjet"],
    uri: "/transactions?limit=5",
    enabled: balanceIsSuccess,
  });

  const {
    data: budgetsData,
    error: budgetsError,
    isLoading: budgetsIsLoading,
    isSuccess: budgetsIsSuccess,
  } = useGetData<Budget[]>({
    key: ["budgetsWidjet"],
    uri: `/budgets?userId=${userId}`,
    enabled: balanceIsSuccess,
  });

  const {
    data: billsData,
    error: billsError,
    isLoading: billsIsLoading,
    isSuccess: billsIsSuccess,
  } = useGetData<ServerResponse<Transaction>>({
    key: ["billsWidjet"],
    uri: "/transactions?recurring=true",
    enabled: balanceIsSuccess,
  });

  return (
    <MainLayout title={t("nav.overview")}>
      <div className="mb-6">
        <Typography variant="body1" mb={4}>
          Hi, {user?.name}, ({user?.email})
        </Typography>
        {balanceIsSuccess && <BalanceWidget data={balanceData} />}
        {balanceIsLoading && <BalanceLoading />}
        {balanceError && <Error text={balanceError.message} />}
      </div>

      <div className="grid gap-6 xl:grid-cols-[7fr_5fr]">
        <div>
          <div className="mb-6">
            {potsIsSuccess && <PotsWidjet data={potsData} />}
            {potsIsLoading && <Skeleton height={215} variant="rounded" sx={{ mb: 6 }} />}
            {potsError && <Error text={potsError.message} />}
          </div>
          {transIsSuccess && <TransActionsWidjet data={transData.data} />}
          {transIsLoading && <Skeleton height={460} variant="rounded" />}
          {transError && <Error text={transError.message} />}
        </div>

        <div>
          <div className="mb-6">
            {budgetsIsSuccess && <BudgetsWidget data={budgetsData} />}
            {budgetsIsLoading && (
              <Skeleton height={350} variant="rounded" sx={{ mb: 6 }} />
            )}
            {budgetsError && <Error text={budgetsError.message} />}
          </div>
          {billsIsSuccess && <BillsWidget data={billsData.data} />}
          {billsIsLoading && <Skeleton height={320} variant="rounded" />}
          {billsError && <Error text={billsError.message} />}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
