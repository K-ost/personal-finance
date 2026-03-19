import { Box, BoxProps, Grid, Skeleton } from "@mui/material";
import { useTranslation } from "react-i18next";

import useGetData from "../../hooks/useGetData";
import { Pot } from "../../types/types";
import BudgetAmount from "../../ui/BudgetAmount";
import Error from "../../ui/Error";
import Wrap from "../../ui/Wrap";

const PotsWidjet = (props: BoxProps): JSX.Element => {
  const { t } = useTranslation();
  const { data, isError, isLoading, isSuccess } = useGetData<Pot[]>({
    key: ["pots"],
    uri: "/pots",
  });

  if (isLoading) return <Skeleton height={215} variant="rounded" sx={{ mb: 6 }} />;
  if (isError) return <Error />;
  if (isSuccess && !data.length) return <></>;

  const totalSaved = isSuccess ? data.reduce((acum, el) => (acum += el.total), 0) : 0;

  return (
    <Wrap title={t("nav.pots")} alllink="/pots" {...props}>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, sm: 5 }}>
          <BudgetAmount amount={totalSaved} title="Total Saved" big="true" />
        </Grid>
        <Grid size={{ xs: 12, sm: 7 }}>
          <Box>
            <Grid container spacing={4}>
              {isSuccess &&
                data
                  .map((pot) => (
                    <Grid size={6} key={pot._id}>
                      <BudgetAmount
                        amount={pot.total}
                        title={pot.name}
                        color={pot.theme}
                      />
                    </Grid>
                  ))
                  .slice(0, 4)}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Wrap>
  );
};

export default PotsWidjet;
