import MainLayout from "../components/MainLayout";
import useGetData from "../hooks/useGetData";
import PotsList from "../components/Pots";
import PotLoading from "../components/Pots/PotLoading";
import { Pot } from "../types";
import PageHeader from "../ui/PageHeader";
import Btn from "../ui/Btn";
import AddPot from "../components/Pots/AddPot";
import { useEffect, useState } from "react";
import { useThemesStore } from "../store/useThemesStore";
import AlertBox from "../ui/AlertBox";
import { POTS_URI } from "../utils/constants";

const Pots = (): JSX.Element => {
  const [addDialog, setAddDialog] = useState<boolean>(false);
  const { setUsedThemes } = useThemesStore();

  const { data, isLoading, isSuccess, isError } = useGetData<Pot[]>({
    key: ["pots"],
    uri: POTS_URI,
  });

  useEffect(() => {
    if (isSuccess) {
      setUsedThemes(data.data.map((el) => el.theme));
    }
    return () => setUsedThemes([]);
  }, [data, isSuccess]);

  return (
    <MainLayout>
      <PageHeader title="Pots">
        <Btn onClick={() => setAddDialog(true)}>+ Add New Pot</Btn>
      </PageHeader>

      {isSuccess && <PotsList data={data.data} />}
      {isLoading && <PotLoading />}
      {isError && (
        <AlertBox severity="error" color="error" title="Server error">
          Try to visit this page little later
        </AlertBox>
      )}

      <AddPot close={() => setAddDialog(false)} open={addDialog} />
    </MainLayout>
  );
};

export default Pots;
