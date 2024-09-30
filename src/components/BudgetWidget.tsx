import Wrap from "../ui/Wrap";
import Chart from "../ui/Chart";
import { Box, Typography } from "@mui/material";
import BudgetLine from "../ui/BudgetLine";
import { Budget } from "../types";

type BudgetWidgetProps = {
  data: Budget[];
};

const BudgetWidget = (props: BudgetWidgetProps): JSX.Element => {
  const { data } = props;

  return (
    <Wrap
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: 0,
        pt: 13,
        [theme.breakpoints.down("md")]: {
          flexDirection: "row",
        },
        [theme.breakpoints.down("sm")]: {
          pt: 10,
          flexDirection: "column",
        },
      })}
    >
      <Chart
        data={data}
        sx={(theme) => ({
          mb: 12,
          [theme.breakpoints.down("md")]: {
            ml: theme.spacing(7),
            mr: theme.spacing(12),
            mb: 0,
          },
          [theme.breakpoints.down("sm")]: {
            ml: 0,
            mr: 0,
            mb: 8,
          },
        })}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h2" sx={{ mb: 6 }}>
          Spending Summary
        </Typography>
        <div>
          {data.map((budget) => (
            <BudgetLine key={budget.id} budget={budget} />
          ))}
        </div>
      </Box>
    </Wrap>
  );
};

export default BudgetWidget;
