import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import BudgetsList from "../components/Budgets";
import AddBudget from "../components/Budgets/AddBudget";
import BudgetsLoading from "../components/Budgets/BudgetsLoading";
import MainLayout from "../components/MainLayout";
import ChartWidget from "../components/widjets/ChartWidget";
import useGetData from "../hooks/useGetData";
import { useUserId } from "../store/useAuthStore";
import { useThemesStore } from "../store/useThemesStore";
import { Budget } from "../types/types";
import AlertBox from "../ui/AlertBox";
import Btn from "../ui/Btn";
import Error from "../ui/Error";
import Wrap from "../ui/Wrap";

const Budgets = (): JSX.Element => {
  const { t } = useTranslation();
  const [addDialog, setAddDialog] = useState<boolean>(false);
  const setUsedCategories = useThemesStore((state) => state.setUsedCategories);
  const setUsedThemes = useThemesStore((state) => state.setUsedThemes);
  const userId = useUserId();

  const { data, isLoading, isSuccess, isError } = useGetData<Budget[]>({
    key: ["budgets"],
    uri: `/budgets?userId=${userId}`,
  });

  useEffect(() => {
    if (isSuccess) {
      setUsedCategories(data.map((el) => el.category));
      setUsedThemes(data.map((el) => el.theme));
    }
    return () => {
      setUsedCategories([]);
      setUsedThemes([]);
    };
  }, [data, isSuccess, setUsedCategories, setUsedThemes]);

  return (
    <MainLayout
      title={t("nav.budgets")}
      btnSlot={
        isSuccess && (
          <Btn onClick={() => setAddDialog(true)} size="small">
            + {t("budgets.addnew.title")}
          </Btn>
        )
      }
    >
      {isLoading && <BudgetsLoading />}
      {isError && <Error />}
      {isSuccess && !!data.length && (
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <div className="sticky top-0">
              <Wrap>
                <ChartWidget data={data} />
              </Wrap>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <BudgetsList data={data} />
          </Grid>
        </Grid>
      )}

      {isSuccess && !data.length && (
        <AlertBox title={t("alerts.noData.title")} color="info" severity="info">
          {t("alerts.noData.text")}
        </AlertBox>
      )}

      <AddBudget close={() => setAddDialog(false)} open={addDialog} />
    </MainLayout>
  );
};

export default Budgets;
