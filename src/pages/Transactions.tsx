import MainLayout from "../components/MainLayout";
import { Typography } from "@mui/material";
import Wrap from "../ui/Wrap";
import Sorting from "../components/Sorting";

const Transactions = (): JSX.Element => {
  return (
    <MainLayout>
      <Typography variant="h1">Transactions</Typography>
      <Wrap>
        <Sorting />
      </Wrap>
    </MainLayout>
  );
};

export default Transactions;
