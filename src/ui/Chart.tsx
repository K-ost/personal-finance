import { Box, BoxProps, styled, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { Budget } from "../types";
import { getChartLimit, getLocalPrice } from "../utils/utils";
import useBudgetHook from "../hooks/useBudgetHook";
import { useTranslation } from "react-i18next";

type ChartProps = BoxProps & {
  data: Budget[];
};

const ChartContainer = styled(Box)<BoxProps>(() => ({
  textAlign: "center",
}));

const ChartInner = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  position: "relative",
  "&::after": {
    backgroundColor: theme.palette.common.white,
    borderRadius: "50%",
    content: '""',
    height: 188,
    position: "absolute",
    width: 188,
    left: 26,
    top: 26,
    opacity: 0.25,
  },
}));

const ChartText = styled(Box)<BoxProps>(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: 170,
  width: 170,
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 10,
}));

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
          slotProps={{ legend: { hidden: true } }}
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
