import { Table, TableBody, TableContainer } from "@mui/material";
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
      <TableContainer>
        <Table>
          <TableBody>
            {data.map((row) => (
              <Row key={row._id} min transaction={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrap>
  );
};

export default TransActionsWidjet;
