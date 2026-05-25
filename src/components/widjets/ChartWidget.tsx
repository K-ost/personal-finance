import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Budget } from "../../types/types";
import BudgetLine from "../../ui/BudgetLine";
import Chart from "../../ui/Chart";
import Wrap from "../../ui/Wrap";
import BudgetService from "../../utils/BudgetService";

type ChartWidgetProps = {
  data: Budget[];
};

const budgetService = new BudgetService();

const ChartWidget = (props: ChartWidgetProps): JSX.Element => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <Wrap>
      <Chart data={data} />
      <div className="mt-8">
        <div className="text-xl text-primary font-bold mb-6">{t("budgets.summary")}</div>
        <div>
          {data.map((budget) => {
            const spent = budgetService.getBudgetSpent(budget);
            return <BudgetLine key={budget._id} budget={budget} spent={spent} />;
          })}
        </div>
      </div>
    </Wrap>
  );
};

export default memo(ChartWidget);
