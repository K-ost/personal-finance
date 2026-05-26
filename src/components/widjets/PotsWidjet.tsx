import { useTranslation } from "react-i18next";

import { Pot } from "../../types/types";
import BudgetAmount from "../../ui/BudgetAmount";
import Wrap from "../../ui/Wrap";

type PotsWidjetProps = {
  data: Pot[];
};

const PotsWidjet = (props: PotsWidjetProps): JSX.Element => {
  const { data } = props;
  const { t } = useTranslation();

  const totalSaved = data.reduce((acum, el) => (acum += el.total), 0);

  return (
    <Wrap title={t("nav.pots")} alllink="/pots">
      <div className="grid grid-col-1 sm:grid-cols-[5fr_7fr] gap-5">
        <BudgetAmount amount={totalSaved} title="Total Saved" big="true" />
        <div className="grid grid-cols-2 gap-4">
          {data
            .map((pot) => (
              <BudgetAmount
                key={pot._id}
                amount={pot.total}
                title={pot.name}
                color={pot.theme}
              />
            ))
            .slice(0, 4)}
        </div>
      </div>
    </Wrap>
  );
};

export default PotsWidjet;
