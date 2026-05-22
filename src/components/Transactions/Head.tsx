import { useTranslation } from "react-i18next";

import Cell from "../../ui/Cell";

const Head = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <thead className="hidden sm:table-header-group">
      <tr>
        <Cell type="th">{t("transactionsPage.table.recipient")}</Cell>
        <Cell type="th">{t("transactionsPage.table.category")}</Cell>
        <Cell type="th">{t("transactionsPage.table.date")}</Cell>
        <Cell type="th" align="right">
          {t("transactionsPage.table.amount")}
        </Cell>
      </tr>
    </thead>
  );
};

export default Head;
