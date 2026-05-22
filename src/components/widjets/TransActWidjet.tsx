import { useTranslation } from "react-i18next";

import { Transaction } from "../../types/types";
import Wrap from "../../ui/Wrap";
import Row from "../Transactions/Row";

type TransActionsWidjetProps = {
  data: Transaction[];
};

const TransActionsWidjet = (props: TransActionsWidjetProps): JSX.Element => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <Wrap title={t("nav.transactions")} alllink="/transactions" all={t("links.viewAll")}>
      <table className="w-full">
        <tbody>
          {data.map((row) => (
            <Row key={row._id} min transaction={row} />
          ))}
        </tbody>
      </table>
    </Wrap>
  );
};

export default TransActionsWidjet;
