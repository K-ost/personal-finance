import { useTranslation } from "react-i18next";

import { RecurringBill } from "../../types/types";
import AlertBox from "../../ui/AlertBox";
import Head from "./Head";
import Row from "./Row";

type BillsTableProps = {
  list: RecurringBill[];
};

const BillsTable = (props: BillsTableProps): JSX.Element => {
  const { list } = props;
  const { t } = useTranslation();

  return (
    <div className="mb-12">
      <table className="w-full">
        <Head />
        <tbody>
          {list.map((transaction) => (
            <Row key={transaction._id} transaction={transaction} />
          ))}
        </tbody>
      </table>
      {!list.length && (
        <AlertBox
          title={t("alerts.notfound.title")}
          color="info"
          severity="info"
          sx={{ mt: 6, mb: 6 }}
        >
          {t("alerts.notfound.text")}
        </AlertBox>
      )}
    </div>
  );
};

export default BillsTable;
