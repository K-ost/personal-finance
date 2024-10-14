import Wrap from "../../ui/Wrap";
import useGetData from "../../hooks/useGetData";
import Error from "../Error";
import { Skeleton } from "@mui/material";

const TransActionsWidjet = (): JSX.Element => {
  const { data, isError, isLoading, isSuccess } = useGetData({
    key: ["transactions"],
    uri: "/transactions?_limit=5",
  });

  if (isLoading) return <Skeleton height={215} variant="rounded" />;
  if (isError) return <Error />;

  return (
    <Wrap title="Transactions" alllink="/transactions" all="View All">
      data
    </Wrap>
  );
};

export default TransActionsWidjet;
