import { Box, Grid2 } from "@mui/material";
import Wrap from "../../ui/Wrap";
import BudgetAmount from "../Budgets/BudgetAmount";

const PotsWidjet = (): JSX.Element => {
  return (
    <Wrap title="Pots" allLink="/pots">
      <Grid2 container spacing={4}>
        <Grid2 size={5}>
          <BudgetAmount amount={850} title="Total Saved" big="true" />
        </Grid2>
        <Grid2 size={7}>
          <Box>
            <Grid2 container spacing={4}>
              <Grid2 size={6}>
                <BudgetAmount amount={500} title="Spent" color={"#ccc"} />
              </Grid2>
              <Grid2 size={6}>
                <BudgetAmount amount={500} title="Spent" color={"#ccc"} />
              </Grid2>
              <Grid2 size={6}>
                <BudgetAmount amount={500} title="Spent" color={"#ccc"} />
              </Grid2>
              <Grid2 size={6}>
                <BudgetAmount amount={500} title="Spent" color={"#ccc"} />
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Wrap>
  );
};

export default PotsWidjet;
