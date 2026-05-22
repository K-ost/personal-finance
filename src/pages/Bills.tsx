import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import BillsTable from "../components/BillsTable";
import Filter from "../components/Filter";
import Sorting from "../components/Filter/Sorting";
import MainLayout from "../components/MainLayout";
import Search from "../components/Search";
import SummaryBills from "../components/SummaryBills";
import TotalBills from "../components/TotalBills";
import TransactionsLoading from "../components/Transactions/Loading";
import useGetData from "../hooks/useGetData";
import useRecurringBills from "../hooks/useRecurringBills";
import { ServerResponse } from "../types/apiTypes";
import { Transaction } from "../types/types";
import Error from "../ui/Error";
import Wrap from "../ui/Wrap";

const Bills = (): JSX.Element => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const params = searchParams.toString().length ? "&" + searchParams.toString() : "";

  const { data, isError, isLoading, isSuccess } = useGetData<ServerResponse<Transaction>>(
    {
      key: ["bills", params],
      uri: `/transactions?recurring=true${params}`,
    },
  );

  const { bills, info } = useRecurringBills({
    data: isSuccess ? data.data : [],
  });

  return (
    <MainLayout title={t("nav.recurringBills")}>
      <div className="grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-6">
        <div>
          {isSuccess && (
            <div>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
                <TotalBills info={info} />
                <SummaryBills info={info} />
              </div>
            </div>
          )}
        </div>
        <div>
          <Wrap>
            {!isError && isSuccess && (
              <Filter>
                <Search className="mb-3 sm:mb-0" />
                <Sorting sx={{ ml: "auto" }} />
              </Filter>
            )}
            {isLoading && <TransactionsLoading count={7} />}
            {isError && <Error />}
            {isSuccess && <BillsTable list={bills} />}
          </Wrap>
        </div>
      </div>
    </MainLayout>
  );
};

export default Bills;
