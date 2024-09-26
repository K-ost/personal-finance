import MainLayout from "../components/MainLayout";
import { Typography } from "@mui/material";
import Pot from "../components/Pot";

const Pots = (): JSX.Element => {
  return (
    <MainLayout>
      <Typography variant="h1">Pots</Typography>

      <Pot color="green" />
    </MainLayout>
  );
};

export default Pots;
