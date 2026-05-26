import { Typography } from "@mui/material";
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
    isSuccess: potsIsSuccess,
  } = useGetData<Pot[]>({
    key: ["potsWidjet"],
    uri: `/pots?userId=${userId}`,
    enabled: balanceIsSuccess,
  });

  const {
    data: transData,
    error: transError,
    isSuccess: transIsSuccess,
  } = useGetData<ServerResponse<Transaction>>({
    key: ["transactionsWidjet"],
    uri: "/transactions?limit=5",
    enabled: balanceIsSuccess,
  });

  const {
    data: budgetsData,
    error: budgetsError,
    isSuccess: budgetsIsSuccess,
  } = useGetData<Budget[]>({
    key: ["budgetsWidjet"],
    uri: `/budgets?userId=${userId}`,
    enabled: balanceIsSuccess,
  });

  const {
    data: billsData,
    error: billsError,
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

      <div className="grid gap-6 grid-cols-1 xl:grid-cols-[58%_42%]">
        <div>
          <div className="mb-6">
            {potsIsSuccess && <PotsWidjet data={potsData} />}
            {potsError && <Error text={potsError.message} />}
          </div>
          {transIsSuccess && <TransActionsWidjet data={transData.data} />}
          {transError && <Error text={transError.message} />}
        </div>

        <div>
          <div className="mb-6">
            {budgetsIsSuccess && <BudgetsWidget data={budgetsData} />}
            {budgetsError && <Error text={budgetsError.message} />}
          </div>
          {billsIsSuccess && <BillsWidget data={billsData.data} />}
          {billsError && <Error text={billsError.message} />}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
