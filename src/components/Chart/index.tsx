import { BoxProps, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { useTranslation } from "react-i18next";

import useBudgetHook from "../../hooks/useBudgetHook";
import { Budget } from "../../types/types";
import { getChartLimit, getLocalPrice } from "../../utils/utils";
import { ChartContainer, ChartInner, ChartText } from "./styles";

type ChartProps = BoxProps & {
  data: Budget[];
};

const Chart = (props: ChartProps): JSX.Element => {
  const { data } = props;
  const limitAmount = getChartLimit(data);
  const { chartData, spentAll } = useBudgetHook({ data });
  const { t } = useTranslation();

  return (
    <ChartContainer {...props}>
      <ChartInner>
        <PieChart
          series={[
            {
              data: chartData,
              innerRadius: 80,
              outerRadius: 120,
              cx: 115,
              cy: 115,
            },
          ]}
          hideLegend
          width={240}
          height={240}
        />
        <ChartText>
          <Typography variant="h1" component="div" sx={{ mb: 2 }}>
            {getLocalPrice(spentAll, true)}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {t("budgets.limit", { amount: limitAmount })}
          </Typography>
        </ChartText>
      </ChartInner>
    </ChartContainer>
  );
};

export default Chart;
