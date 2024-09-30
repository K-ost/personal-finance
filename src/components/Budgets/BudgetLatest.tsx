import { Box, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type BudgetLatestProps = {
  children: React.ReactNode;
};

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  borderRadius: 12,
  padding: theme.spacing(5),
}));

const BudgetLatest = (props: BudgetLatestProps): JSX.Element => {
  const { children } = props;
  return (
    <Wrapper {...props}>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 5 }}>
        <Typography color="primary" variant="h3" sx={{ m: 0 }}>
          Latest Spending
        </Typography>
        <Link to="/transactions">See All</Link>
      </Stack>
      {children}
    </Wrapper>
  );
};

export default BudgetLatest;
