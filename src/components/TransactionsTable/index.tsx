import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Transaction } from "../../types";
import Head from "./Head";
import Row from "./Row";
import AlertBox from "../../ui/AlertBox";
import { useTranslation } from "react-i18next";

type TransactionsTableProps = {
  list: Transaction[];
};

const TransactionsTable = (props: TransactionsTableProps): JSX.Element => {
  const { list } = props;
  const { t } = useTranslation();

  return (
    <TableContainer sx={{ mb: 12 }}>
      {list.length > 0 && (
        <Table>
          <Head />
          <TableBody>
            {list.map((transaction) => (
              <Row key={transaction.id} transaction={transaction} />
            ))}
          </TableBody>
        </Table>
      )}
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
    </TableContainer>
  );
};

export default TransactionsTable;
