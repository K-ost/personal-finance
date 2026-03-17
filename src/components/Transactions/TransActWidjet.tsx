import { BoxProps, Skeleton, Table, TableBody, TableContainer } from "@mui/material";
import { useTranslation } from "react-i18next";

import useGetData from "../../hooks/useGetData";
import { ServerResponse } from "../../types/apiTypes";
import { Transaction } from "../../types/types";
import Wrap from "../../ui/Wrap";
import Error from "../Error";
import Row from "./Row";

const TransActionsWidjet = (props: BoxProps): JSX.Element => {
  const { t } = useTranslation();
  const { data, isError, isLoading, isSuccess } = useGetData<ServerResponse<Transaction>>(
    {
      key: ["transactions"],
      uri: "/transactions?limit=5",
    },
  );

  if (isLoading) return <Skeleton height={460} variant="rounded" />;
  if (isError) return <Error />;

  return (
    <Wrap
      title={t("nav.transactions")}
      alllink="/transactions"
      all={t("links.viewAll")}
      {...props}
    >
      <TableContainer>
        <Table>
          <TableBody>
            {isSuccess &&
              data.data.map((row) => <Row key={row._id} min transaction={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrap>
  );
};

export default TransActionsWidjet;
