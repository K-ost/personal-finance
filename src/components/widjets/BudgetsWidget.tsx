import { useTranslation } from "react-i18next";

import { Budget } from "../../types/types";
import BudgetAmount from "../../ui/BudgetAmount";
import Chart from "../../ui/Chart";
import Wrap from "../../ui/Wrap";

type BudgetsWidgetProps = {
  data: Budget[];
};

const BudgetsWidget = (props: BudgetsWidgetProps): JSX.Element => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <Wrap title={t("nav.budgets")} alllink="/budgets">
      <div className="mt-12 mb-7 grid grid-cols-1 sm:grid-cols-[9fr_3fr] gap-2">
        <Chart data={data} />

        <div className="mt-4 sm:mt-0 grid grid-cols-1 gap-4">
          {data
            .map((budget) => (
              <div key={budget._id}>
                <BudgetAmount
                  amount={budget.maximum}
                  title={budget.category}
                  color={budget.theme}
                />
              </div>
            ))
            .slice(0, 5)}
        </div>
        {data.length > 5 && <p>...</p>}
      </div>
    </Wrap>
  );
};

export default BudgetsWidget;
