import MainLayout from "../components/MainLayout";
import Btn from "../ui/Btn";
import PageHeader from "../ui/PageHeader";
import useGetData from "../hooks/useGetData";
import { Budget } from "../types";
import { Grid2 } from "@mui/material";
import BudgetWidget from "../components/BudgetWidget";
import BudgetsList from "../components/Budgets";
import BudgetsLoading from "../components/Budgets/BudgetsLoading";
import AlertBox from "../ui/AlertBox";
import { useEffect, useState } from "react";
import AddBudget from "../components/Budgets/AddBudget";
import { useThemesStore } from "../store/useThemesStore";
import { BUDGETS_URI } from "../utils/constants";

const Budgets = (): JSX.Element => {
  const [addDialog, setAddDialog] = useState<boolean>(false);
  const { setUsedThemes } = useThemesStore();

  const { data, isLoading, isSuccess, isError } = useGetData<Budget[]>({
    key: ["budgets"],
    uri: BUDGETS_URI,
  });

  useEffect(() => {
    if (isSuccess) {
      setUsedThemes(data.data.map((el) => el.theme));
    }
    return () => setUsedThemes([]);
  }, [data, isSuccess]);

  return (
    <MainLayout>
      <PageHeader title="Budgets">
        <Btn onClick={() => setAddDialog(true)}>+ Add New Budget</Btn>
      </PageHeader>

      {isLoading && <BudgetsLoading />}

      {isSuccess && (
        <Grid2 container spacing={6}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <BudgetWidget data={data.data} />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 7 }}>
            <BudgetsList data={data.data} />
          </Grid2>
        </Grid2>
      )}

      {isError && (
        <AlertBox severity="error" color="error" title="Server error">
          Try to visit this page little later
        </AlertBox>
      )}

      <AddBudget close={() => setAddDialog(false)} open={addDialog} />
    </MainLayout>
  );
};

export default Budgets;
