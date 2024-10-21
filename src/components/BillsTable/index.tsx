import {
  Table,
  TableBody,
  TableContainer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { RecurringBill } from "../../types";
import Row from "./Row";
import Head from "./Head";

type BillsTableProps = {
  list: RecurringBill[];
};

const BillsTable = (props: BillsTableProps): JSX.Element => {
  const { list } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableContainer sx={{ mb: 12 }}>
      <Table>
        {!isMobile && <Head />}
        <TableBody>
          {list.map((transaction) => (
            <Row key={transaction.id} transaction={transaction} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillsTable;
