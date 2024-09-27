import { Alert, AlertTitle, useMediaQuery, useTheme } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Wrap from "../ui/Wrap";
import useGetData from "../hooks/useGetData";
import { Transaction } from "../types";
import TransactionsTable from "../components/TransactionsTable";
import Pager from "../ui/Pager";
import Filter from "../components/Filter";
import Search from "../components/Filter/Search";
import Sorting from "../components/Filter/Sorting";
import FilterCategory from "../components/Filter/FilterCategory";
import TransactionsLoading from "../components/TransactionsTable/Loading";
import PageHeader from "../ui/PageHeader";

const pageCount = 10;

const Transactions = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const to = currentPage * pageCount;
  const from = to - pageCount;
  const params = searchParams.toString();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, isLoading, isSuccess, isError } = useGetData<Transaction[]>({
    key: ["transactions", params, currentPage.toString()],
    uri: `/transactions?_start=${from}&_end=${to}${
      params.length ? "&" + params : ""
    }`,
  });

  return (
    <MainLayout>
      <PageHeader title="Transactions" />
      <Wrap>
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

        {isSuccess && <TransactionsTable list={data.data} />}
        {isLoading && <TransactionsLoading count={pageCount} />}
        {isError && (
          <Alert variant="filled" severity="error" color="error">
            <AlertTitle>500 - Server error.</AlertTitle>
            Try to visit this page little later
          </Alert>
        )}

        {isSuccess && data.count > pageCount && (
          <Pager
            count={Math.ceil(data.count / pageCount)}
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
