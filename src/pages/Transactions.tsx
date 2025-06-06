import { useMediaQuery, useTheme } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Wrap from "../ui/Wrap";
import useGetData from "../hooks/useGetData";
import { ServerResponse, Transaction } from "../types";
import TransactionsTable from "../components/Transactions";
import Pager from "../ui/Pager";
import Filter from "../components/Filter";
import Search from "../components/Filter/Search";
import Sorting from "../components/Filter/Sorting";
import FilterCategory from "../components/Filter/FilterCategory";
import TransactionsLoading from "../components/Transactions/Loading";
import { TRANSACTIONS_URI } from "../utils/constants";
import { useTranslation } from "react-i18next";
import Error from "../components/Error";
import MainLayout from "../components/MainLayout";

const pageCount = 10;

const Transactions = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Getting pages
  const currentPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const params = searchParams.toString();

  const { data, isLoading, isSuccess, isError } = useGetData<ServerResponse<Transaction>>(
    {
      key: ["transactions", params, currentPage.toString()],
      uri: `${TRANSACTIONS_URI}?${params.length ? "&" + params : ""}`,
    }
  );

  return (
    <MainLayout title={t("nav.transactions")}>
      <Wrap>
        {!isError && isSuccess && (
          <Filter>
            <Search
              sx={{
                m: 0,
                mr: isMobile ? 0 : theme.spacing(6),
                mb: isMobile ? theme.spacing(4) : 0,
              }}
            />
            <Sorting sx={{ ml: "auto" }} />
            <FilterCategory />
          </Filter>
        )}

        {isLoading && <TransactionsLoading count={pageCount} />}
        {isError && <Error />}

        {isSuccess && <TransactionsTable list={data.data} />}

        {isSuccess && data.count! > pageCount && (
          <Pager
            count={Math.ceil(data.count! / pageCount)}
            page={currentPage}
            onChange={(__, page: number) => {
              if (page > 1) {
                searchParams.set("page", page.toString());
              } else {
                searchParams.delete("page");
              }
              setSearchParams(searchParams);
            }}
          />
        )}
      </Wrap>
    </MainLayout>
  );
};

export default Transactions;
