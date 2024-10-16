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
import { POTS_URI } from "../utils/constants";
import { useTranslation } from "react-i18next";
import Error from "../components/Error";
import { Box } from "@mui/material";

const Pots = (): JSX.Element => {
  const { t } = useTranslation();
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
  }, [data, isSuccess, setUsedThemes]);

  return (
    <MainLayout title={t("nav.pots")}>
      {isSuccess && (
        <Box textAlign="right" sx={{ mb: 6 }}>
          <Btn onClick={() => setAddDialog(true)}>
            + {t("pots.addnew.title")}
          </Btn>
        </Box>
      )}

      {isLoading && <PotLoading />}
      {isError && <Error />}
      {isSuccess && <PotsList data={data.data} />}

      <AddPot close={() => setAddDialog(false)} open={addDialog} />
    </MainLayout>
  );
};

export default Pots;
