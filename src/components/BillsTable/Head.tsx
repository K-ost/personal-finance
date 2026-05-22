import { useTranslation } from "react-i18next";

import Cell from "../../ui/Cell";

const Head = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <thead className="hidden sm:table-row-group">
      <tr>
        <Cell type="th">{t("bills.table.title")}</Cell>
        <Cell type="th">{t("bills.table.date")}</Cell>
        <Cell type="th" align="right">
          {t("bills.table.amount")}
        </Cell>
      </tr>
    </thead>
  );
};

export default Head;
