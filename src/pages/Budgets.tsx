import MainLayout from "../components/MainLayout";
import Btn from "../ui/Btn";
import PageHeader from "../ui/PageHeader";
import useGetData from "../hooks/useGetData";
import { Budget } from "../types";
import { Grid2 } from "@mui/material";
import BudgetWidget from "../components/BudgetWidget";
import BudgetsList from "../components/Budgets";
import AlertBox from "../ui/AlertBox";

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

      <AlertBox
        title="in development"
        color="info"
        severity="info"
        sx={{ mb: 4 }}
      >
        Currently this page is being developed.
      </AlertBox>

      <Grid2 container spacing={6}>
        <Grid2 size={{ xs: 12, md: 5 }}>
          {isSuccess && <BudgetWidget data={data?.data} />}
        </Grid2>

        <Grid2 size={{ xs: 12, md: 7 }}>
          {isSuccess && <BudgetsList data={data.data} />}
        </Grid2>
      </Grid2>
    </MainLayout>
  );
};

export default Budgets;
