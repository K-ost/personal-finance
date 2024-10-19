import Wrap from "../../ui/Wrap";
import useGetData from "../../hooks/useGetData";
import Error from "../Error";
import {
  BoxProps,
  Skeleton,
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";
import Row from "./Row";
import { Transaction } from "../../types";
import { useTranslation } from "react-i18next";

const TransActionsWidjet = (props: BoxProps): JSX.Element => {
  const { t } = useTranslation();
  const { data, isError, isLoading, isSuccess } = useGetData<Transaction[]>({
    key: ["transactions"],
    uri: "/transactions?_limit=5",
  });

  if (isLoading) return <Skeleton height={215} variant="rounded" />;
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
              data.map((row) => <Row key={row.id} min transaction={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrap>
  );
};

export default TransActionsWidjet;
