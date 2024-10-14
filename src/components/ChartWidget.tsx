import Chart from "../ui/Chart";
import { Box, Typography } from "@mui/material";
import BudgetLine from "../ui/BudgetLine";
import { Budget } from "../types";
import { useTranslation } from "react-i18next";

type ChartWidgetProps = {
  data: Budget[];
};

const ChartWidget = (props: ChartWidgetProps): JSX.Element => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <>
      <Chart
        data={data}
        sx={(theme) => ({
          mb: 12,
          [theme.breakpoints.down("md")]: {
            ml: theme.spacing(7),
            mr: theme.spacing(12),
            mb: 0,
          },
          [theme.breakpoints.down("sm")]: {
            ml: 0,
            mr: 0,
            mb: 8,
          },
        })}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h2" sx={{ mb: 6 }}>
          {t("budgets.summary")}
        </Typography>
        <div>
          {data.map((budget) => (
            <BudgetLine key={budget.id} budget={budget} />
          ))}
        </div>
      </Box>
    </>
  );
};

export default ChartWidget;
