import { Table, TableBody, TableContainer, useMediaQuery, useTheme } from "@mui/material";
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
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableContainer sx={{ mb: 12 }}>
      <Table>
        {!isMobile && <Head />}
        <TableBody>
          {list.map((transaction) => (
            <Row key={transaction._id} transaction={transaction} />
          ))}
        </TableBody>
      </Table>
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

export default BillsTable;
