import { PieChart } from "@mui/x-charts";
import { useTranslation } from "react-i18next";

import { Budget } from "../../types/types";
import ChartService from "../../utils/ChartService";
import { getChartLimit, getLocalPrice } from "../../utils/utils";

type ChartProps = {
  data: Budget[];
};

const chartService = new ChartService();

const Chart = (props: ChartProps): JSX.Element => {
  const { data } = props;
  const limitAmount = getChartLimit(data);
  const { t } = useTranslation();
  const chartData = chartService.getChartData(data);
  const allSpent = chartService.getAllSpent(chartData);

  return (
    <div className="text-center">
      <div className="inline-flex relative">
        <div className="bg-white rounded-[50%] h-47 absolute w-47 left-6.5 top-6.5 z-2 opacity-25"></div>
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
        <div className="flex flex-col items-center justify-center w-42.5 h-42.5 absolute left-[50%] top-[50%] z-10 -translate-1/2">
          <div className="mb-2 text-3xl font-bold text-primary">
            {getLocalPrice(allSpent)}
          </div>
          <div className="text-sm text-grey-500">
            {t("budgets.limit", { amount: limitAmount })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
