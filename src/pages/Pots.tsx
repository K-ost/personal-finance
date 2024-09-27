import MainLayout from "../components/MainLayout";
import { Alert, AlertTitle, Typography } from "@mui/material";
import useGetData from "../hooks/useGetData";
import PotsList from "../components/Pots";
import PotLoading from "../components/Pots/PotLoading";
import { Pot } from "../types";

const Pots = (): JSX.Element => {
  const { data, isLoading, isSuccess, isError } = useGetData<Pot[]>({
    key: ["pots"],
    uri: "/pots",
  });

  return (
    <MainLayout>
      <Typography variant="h1">Pots</Typography>

      {isSuccess && <PotsList data={data.data} />}
      {isLoading && <PotLoading />}
      {isError && (
        <Alert variant="filled" severity="error" color="error">
          <AlertTitle>500 - Server error.</AlertTitle>
          Try to visit this page little later
        </Alert>
      )}
    </MainLayout>
  );
};

export default Pots;
