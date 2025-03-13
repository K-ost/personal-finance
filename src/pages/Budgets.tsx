import Btn from "../ui/Btn";
import useGetData from "../hooks/useGetData";
import { Budget } from "../types";
import { Grid2 } from "@mui/material";
import BudgetsList from "../components/Budgets";
import BudgetsLoading from "../components/Budgets/BudgetsLoading";
import { useEffect, useState } from "react";
import AddBudget from "../components/Budgets/AddBudget";
import { useThemesStore } from "../store/useThemesStore";
import { BUDGETS_URI } from "../utils/constants";
import { useTranslation } from "react-i18next";
import Error from "../components/Error";
import Wrap from "../ui/Wrap";
import ChartWidget from "../components/ChartWidget";
import MainLayout from "../components/MainLayout";

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
      btn={
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
        <Grid2 container spacing={6}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Wrap
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                position: "sticky",
                top: 0,
                pt: 13,
                [theme.breakpoints.down("md")]: {
                  flexDirection: "row",
                },
                [theme.breakpoints.down("sm")]: {
                  pt: 10,
                  flexDirection: "column",
                },
              })}
            >
              <ChartWidget data={data} />
            </Wrap>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 7 }}>
            <BudgetsList data={data} />
          </Grid2>
        </Grid2>
      )}

      <AddBudget close={() => setAddDialog(false)} open={addDialog} />
    </MainLayout>
  );
};

export default Budgets;
