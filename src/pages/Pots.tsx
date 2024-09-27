import MainLayout from "../components/MainLayout";
import { Alert, AlertTitle } from "@mui/material";
import useGetData from "../hooks/useGetData";
import PotsList from "../components/Pots";
import PotLoading from "../components/Pots/PotLoading";
import { Pot } from "../types";
import PageHeader from "../ui/PageHeader";
import Btn from "../ui/Btn";

const Pots = (): JSX.Element => {
  const { data, isLoading, isSuccess, isError } = useGetData<Pot[]>({
    key: ["pots"],
    uri: "/pots",
  });

  return (
    <MainLayout>
      <PageHeader title="Pots">
        <Btn>+ Add New Pot</Btn>
      </PageHeader>

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
