import MainLayout from "../components/MainLayout";
import { Typography } from "@mui/material";
import Wrap from "../ui/Wrap";
import Sorting from "../components/Sorting";
import useGetData from "../hooks/useGetData";
import { Transaction } from "../types";
import TransactionsTable from "../components/TransactionsTable";
import { useEffect, useState } from "react";
import Pager from "../ui/Pager";

const pageCount = 10;

const Transactions = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [search, setSearch] = useState<string>("");
  const to = page * pageCount;
  const from = to - pageCount;

  const { data, isLoading, isSuccess } = useGetData<Transaction[]>({
    key: ["transactions"],
    uri: "/transactions",
  });

  useEffect(() => {
    if (isSuccess) setTransactions(data);
  }, [data, isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      setTransactions(
        data.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  return (
    <MainLayout>
      <Typography variant="h1">Transactions</Typography>
      <Wrap>
        {isLoading && "Loading..."}

        {isSuccess && (
          <>
            <Sorting setSearch={setSearch} />
            <TransactionsTable list={transactions.slice(from, to)} />
            {transactions.length > pageCount && (
              <Pager
                count={Math.ceil(transactions.length / pageCount)}
                onChange={(__, page: number) => setPage(page)}
              />
            )}
          </>
        )}
      </Wrap>
    </MainLayout>
  );
};

export default Transactions;
