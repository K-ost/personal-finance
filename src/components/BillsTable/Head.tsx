import { TableHead, TableRow } from "@mui/material";
import Cell from "../../ui/Cell";
import { useTranslation } from "react-i18next";

const Head = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <TableHead>
      <TableRow>
        <Cell sm="true">{t("bills.table.title")}</Cell>
        <Cell sm="true">{t("bills.table.date")}</Cell>
        <Cell sm="true" align="right">
          {t("bills.table.amount")}
        </Cell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
