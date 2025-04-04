import { BoxProps, Grid2, Skeleton } from "@mui/material";
import useGetData from "../../hooks/useGetData";
import { Budget } from "../../types";
import Wrap from "../../ui/Wrap";
import { BUDGETS_URI } from "../../utils/constants";
import Error from "../Error";
import Chart from "../../ui/Chart";
import BudgetAmount from "../../ui/BudgetAmount";
import { useTranslation } from "react-i18next";

const BudgetsWidget = (props: BoxProps): JSX.Element => {
  const { t } = useTranslation();
  const { data, isError, isLoading, isSuccess } = useGetData<Budget[]>({
    key: ["budgets"],
    uri: BUDGETS_URI,
  });

  if (isLoading) return <Skeleton height={350} variant="rounded" sx={{ mb: 6 }} />;
  if (isError) return <Error />;
  if (isSuccess && !data.length) return <></>;

  return (
    <Wrap title={t("nav.budgets")} alllink="/budgets" {...props}>
      {isSuccess && (
        <Grid2 container spacing={5} sx={{ mt: 12, mb: 7 }}>
          <Grid2 size={{ xs: 12, sm: 9 }}>
            <Chart data={data} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 3 }}>
            <div>
              <Grid2 container spacing={4}>
                {data.map((budget) => (
                  <Grid2 key={budget._id} size={{ xs: 6, sm: 12 }}>
                    <BudgetAmount
                      amount={budget.maximum}
                      title={budget.category}
                      color={budget.theme}
                    />
                  </Grid2>
                ))}
              </Grid2>
            </div>
          </Grid2>
        </Grid2>
      )}
    </Wrap>
  );
};

export default BudgetsWidget;
