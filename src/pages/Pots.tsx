import MainLayout from "../components/MainLayout";
import { Typography } from "@mui/material";
import useGetData from "../hooks/useGetData";
import PotList from "../components/PotList";
import { Pot } from "../types";

const Pots = (): JSX.Element => {
  const { data, isLoading, isSuccess } = useGetData<Pot[]>({
    key: ["pots"],
    uri: "/pots",
  });

  return (
    <MainLayout>
      <Typography variant="h1">Pots</Typography>

      {isSuccess && <PotList data={data.data} />}
      {isLoading && "Loading..."}
    </MainLayout>
  );
};

export default Pots;
