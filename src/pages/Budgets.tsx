import MainLayout from "../components/MainLayout";
import Btn from "../ui/Btn";
import PageHeader from "../ui/PageHeader";
import useGetData from "../hooks/useGetData";
import { Budget } from "../types";
import { Grid2 } from "@mui/material";
import Wrap from "../ui/Wrap";
import BudgetWidget from "../components/BudgetWidget";
import BudgetItem from "../components/Budgets/BudgetItem";

const Budgets = (): JSX.Element => {
  const { data, isLoading, isSuccess } = useGetData<Budget[]>({
    key: ["budgets"],
    uri: "/budgets",
  });

  return (
    <MainLayout>
      <PageHeader title="Budgets">
        <Btn>+ Add New Budget</Btn>
      </PageHeader>

      <Grid2 container spacing={6}>
        <Grid2 size={{ xs: 12, md: 5 }}>
          {isSuccess && <BudgetWidget data={data?.data} />}
        </Grid2>

        <Grid2 size={{ xs: 12, md: 7 }}>
          <BudgetItem />
        </Grid2>
      </Grid2>
    </MainLayout>
  );
};

export default Budgets;
