import { Stack, Typography } from "@mui/material";
import { getLocalPrice } from "../../utils/utils";

type PotPriceProps = {
  total: number;
};

const PotPrice = (props: PotPriceProps): JSX.Element => {
  const { total } = props;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb={4}
    >
      <Typography variant="body1" component="div" color="textSecondary">
        Total Saved
      </Typography>
      <Typography variant="h1" m={0} component="div">
        {getLocalPrice(total)}
      </Typography>
    </Stack>
  );
};

export default PotPrice;
