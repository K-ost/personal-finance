import { Grid2 } from "@mui/material";
import { Pot } from "../../types";
import PotItem from "./PotItem";

type PotListProps = {
  data: Pot[];
};

const PotsList = (props: PotListProps): JSX.Element => {
  const { data } = props;

  return (
    <Grid2 container spacing={6}>
      {data.map((pot) => (
        <Grid2 key={pot._id} size={{ xs: 12, sm: 6 }}>
          <PotItem pot={pot} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default PotsList;
