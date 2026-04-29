import { BoxProps, Grid, Skeleton } from "@mui/material";
import { useTranslation } from "react-i18next";

import Chart from "../../components/Chart";
import { BUDGETS_URI } from "../../constants/constants";
import useGetData from "../../hooks/useGetData";
import { useUserId } from "../../store/useAuthStore";
import { Budget } from "../../types/types";
import BudgetAmount from "../../ui/BudgetAmount";
import Error from "../../ui/Error";
import Wrap from "../../ui/Wrap";

const BudgetsWidget = (props: BoxProps): JSX.Element => {
  const { t } = useTranslation();
  const userId = useUserId();

  const { data, isError, isLoading, isSuccess } = useGetData<Budget[]>({
    key: ["budgetsWidjet"],
    uri: BUDGETS_URI + `?userId=${userId}`,
  });

  if (isLoading) return <Skeleton height={350} variant="rounded" sx={{ mb: 6 }} />;
  if (isError) return <Error />;
  if (isSuccess && !data.length) return <></>;

  return (
    <Wrap title={t("nav.budgets")} alllink="/budgets" {...props}>
      {isSuccess && (
        <Grid container spacing={5} sx={{ mt: 12, mb: 7 }}>
          <Grid size={{ xs: 12, sm: 9 }}>
            <Chart data={data} />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <div>
              <Grid container spacing={4}>
                {data
                  .map((budget) => (
                    <Grid key={budget._id} size={{ xs: 6, sm: 12 }}>
                      <BudgetAmount
                        amount={budget.maximum}
                        title={budget.category}
                        color={budget.theme}
                      />
                    </Grid>
                  ))
                  .slice(0, 5)}
              </Grid>
              {data.length > 5 && <p>...</p>}
            </div>
          </Grid>
        </Grid>
      )}
    </Wrap>
  );
};

export default BudgetsWidget;
