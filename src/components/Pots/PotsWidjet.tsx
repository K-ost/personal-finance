import { Box, Grid2, Skeleton } from "@mui/material";
import Wrap from "../../ui/Wrap";
import BudgetAmount from "../../ui/BudgetAmount";
import useGetData from "../../hooks/useGetData";
import { Pot } from "../../types";
import Error from "../Error";

const PotsWidjet = (): JSX.Element => {
  const { data, isError, isLoading, isSuccess } = useGetData<Pot[]>({
    key: ["pots"],
    uri: "/pots",
  });

  if (isLoading) return <Skeleton height={215} variant="rounded" />;
  if (isError) return <Error />;

  const totalSaved = data!.data.reduce((acum, el) => (acum += el.total), 0);

  return (
    <Wrap title="Pots" alllink="/pots">
      <Grid2 container spacing={5}>
        <Grid2 size={{ xs: 12, sm: 5 }}>
          <BudgetAmount amount={totalSaved} title="Total Saved" big="true" />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 7 }}>
          <Box>
            <Grid2 container spacing={4}>
              {isSuccess &&
                data.data
                  .map((pot) => (
                    <Grid2 size={6} key={pot.id}>
                      <BudgetAmount
                        amount={pot.total}
                        title={pot.name}
                        color={pot.theme}
                      />
                    </Grid2>
                  ))
                  .slice(0, 4)}
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Wrap>
  );
};

export default PotsWidjet;
