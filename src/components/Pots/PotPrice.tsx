import { Typography } from "@mui/material";

import { getLocalPrice } from "../../utils/utils";

type PotPriceProps = {
  title: string;
  total: number;
};

const PotPrice = (props: PotPriceProps): JSX.Element => {
  const { total, title } = props;

  return (
    <div className="flex items-center justify-between mb-4">
      <Typography variant="body1" component="div" color="textSecondary">
        {title}
      </Typography>
      <Typography variant="h1" m={0} component="div">
        {getLocalPrice(total)}
      </Typography>
    </div>
  );
};

export default PotPrice;
