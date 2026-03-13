import { TableHead, TableRow } from "@mui/material";
import { useTranslation } from "react-i18next";

import Cell from "../../ui/Cell";

const Head = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <TableHead>
      <TableRow>
        <Cell sm="true">{t("transactionsPage.table.recipient")}</Cell>
        <Cell sm="true">{t("transactionsPage.table.category")}</Cell>
        <Cell sm="true">{t("transactionsPage.table.date")}</Cell>
        <Cell sm="true" align="right">
          {t("transactionsPage.table.amount")}
        </Cell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
