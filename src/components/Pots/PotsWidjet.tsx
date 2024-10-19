import { Box, BoxProps, Grid2, Skeleton } from "@mui/material";
import Wrap from "../../ui/Wrap";
import BudgetAmount from "../../ui/BudgetAmount";
import useGetData from "../../hooks/useGetData";
import { Pot } from "../../types";
import Error from "../Error";
import { useTranslation } from "react-i18next";

const PotsWidjet = (props: BoxProps): JSX.Element => {
  const { t } = useTranslation();
  const { data, isError, isLoading, isSuccess } = useGetData<Pot[]>({
    key: ["pots"],
    uri: "/pots",
  });

  if (isLoading)
    return <Skeleton height={215} variant="rounded" sx={{ mb: 6 }} />;
  if (isError) return <Error />;

  const totalSaved = isSuccess
    ? data.reduce((acum, el) => (acum += el.total), 0)
    : 0;

  return (
    <Wrap title={t("nav.pots")} alllink="/pots" {...props}>
      <Grid2 container spacing={5}>
        <Grid2 size={{ xs: 12, sm: 5 }}>
          <BudgetAmount amount={totalSaved} title="Total Saved" big="true" />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 7 }}>
          <Box>
            <Grid2 container spacing={4}>
              {isSuccess &&
                data
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
