import { Table, TableBody, TableContainer, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Transaction } from "../../types/types";
import AlertBox from "../../ui/AlertBox";
import Head from "./Head";
import Row from "./Row";

type TransactionsTableProps = {
  list: Transaction[];
};

const TransactionsTable = (props: TransactionsTableProps): JSX.Element => {
  const { list } = props;
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableContainer sx={{ mb: 12 }}>
      {list.length > 0 && (
        <Table>
          {!isMobile && <Head />}
          <TableBody>
            {list.map((transaction) => (
              <Row key={transaction._id} transaction={transaction} />
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
