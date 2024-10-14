import { Skeleton } from "@mui/material";
import useGetData from "../../hooks/useGetData";
import { Budget } from "../../types";
import Wrap from "../../ui/Wrap";
import { BUDGETS_URI } from "../../utils/constants";
import ChartWidget from "../ChartWidget";
import Error from "../Error";

const BudgetsWidget = (): JSX.Element => {
  const { data, isError, isLoading, isSuccess } = useGetData<Budget[]>({
    key: ["budgets"],
    uri: BUDGETS_URI,
  });

  if (isLoading) return <Skeleton height={215} variant="rounded" />;
  if (isError) return <Error />;

  return (
    <Wrap title="Budgets">{isSuccess && <ChartWidget data={data.data} />}</Wrap>
  );
};

export default BudgetsWidget;
