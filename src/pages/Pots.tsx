import MainLayout from "../components/MainLayout";
import { Alert, AlertTitle, Typography } from "@mui/material";
import useGetData from "../hooks/useGetData";
import PotList from "../components/PotList";
import { Pot } from "../types";
import PotLoading from "../components/PotList/PotLoading";

const Pots = (): JSX.Element => {
  const { data, isLoading, isSuccess, isError } = useGetData<Pot[]>({
    key: ["pots"],
    uri: "/pots",
  });

  return (
    <MainLayout>
      <Typography variant="h1">Pots</Typography>

      {isSuccess && <PotList data={data.data} />}
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
