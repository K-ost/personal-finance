import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import Filter from "../components/Filter";
import FilterCategory from "../components/Filter/FilterCategory";
import Sorting from "../components/Filter/Sorting";
import MainLayout from "../components/MainLayout";
import Search from "../components/Search";
import TransactionsTable from "../components/Transactions";
import TransactionsLoading from "../components/Transactions/Loading";
import useRefresh from "../hooks/useRefresh";
import { ServerResponse } from "../types/apiTypes";
import { Transaction } from "../types/types";
import Error from "../ui/Error";
import Pager from "../ui/Pager";
import Wrap from "../ui/Wrap";

const pageCount = 10;

const Transactions = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Getting pages
  const currentPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const params = searchParams.toString();

  const { data, isLoading, isSuccess, isError } = useRefresh<ServerResponse<Transaction>>(
    {
      key: ["transactions", params, currentPage.toString()],
      uri: `/transactions?${params.length ? "&" + params : ""}`,
    },
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
