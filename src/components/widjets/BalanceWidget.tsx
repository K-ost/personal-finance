import { useTranslation } from "react-i18next";

import { BalanceType } from "../../types/types";
import Balance from "../../ui/Balance";

type BalanceWidgetProps = {
  data: BalanceType;
};

const BalanceWidget = (props: BalanceWidgetProps): JSX.Element => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
      <Balance title={t("balances.current")} amount={data.current} dark />
      <Balance title={t("balances.income")} amount={data.income} />
      <Balance title={t("balances.expenses")} amount={data.expenses} />
    </div>
  );
};

export default BalanceWidget;
