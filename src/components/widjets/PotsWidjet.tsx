import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Pot } from "../../types/types";
import BudgetAmount from "../../ui/BudgetAmount";
import Wrap from "../../ui/Wrap";

type PotsWidjetProps = {
  data: Pot[];
};

const PotsWidjet = (props: PotsWidjetProps): JSX.Element => {
  const { data } = props;
  const { t } = useTranslation();

  const totalSaved = data.reduce((acum, el) => (acum += el.total), 0);

  return (
    <Wrap title={t("nav.pots")} alllink="/pots">
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, sm: 5 }}>
          <BudgetAmount amount={totalSaved} title="Total Saved" big="true" />
        </Grid>
        <Grid size={{ xs: 12, sm: 7 }}>
          <Box>
            <Grid container spacing={4}>
              {data
                .map((pot) => (
                  <Grid size={6} key={pot._id}>
                    <BudgetAmount amount={pot.total} title={pot.name} color={pot.theme} />
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
