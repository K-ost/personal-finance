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
import { useTranslation } from "react-i18next";

const Budgets = (): JSX.Element => {
  const { t } = useTranslation();
  const [addDialog, setAddDialog] = useState<boolean>(false);
  const { setUsedCategories, setUsedThemes } = useThemesStore();

  const { data, isLoading, isSuccess, isError } = useGetData<Budget[]>({
    key: ["budgets"],
    uri: BUDGETS_URI,
  });

  useEffect(() => {
    if (isSuccess) {
      setUsedCategories(data.data.map((el) => el.category));
      setUsedThemes(data.data.map((el) => el.theme));
    }
    return () => {
      setUsedCategories([]);
      setUsedThemes([]);
    };
  }, [data, isSuccess, setUsedCategories, setUsedThemes]);

  return (
    <MainLayout>
      <PageHeader title={t("nav.budgets")}>
        {isSuccess && (
          <Btn onClick={() => setAddDialog(true)}>+ {t("budgets.addnew")}</Btn>
        )}
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
        <AlertBox
          severity="error"
          color="error"
          title={t("alerts.serverError.title")}
        >
          {t("alerts.serverError.text")}
        </AlertBox>
      )}

      <AddBudget close={() => setAddDialog(false)} open={addDialog} />
    </MainLayout>
  );
};

export default Budgets;
