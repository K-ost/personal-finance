import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import PotsList from "../components/Pots";
import PotLoading from "../components/Pots/PotLoading";
import { Pot } from "../types";
import Btn from "../ui/Btn";
import AddPot from "../components/Pots/AddPot";
import { useThemesStore } from "../store/useThemesStore";
import { POTS_URI } from "../utils/constants";
import { useTranslation } from "react-i18next";
import Error from "../components/Error";
import MainLayout from "../components/MainLayout";
import { Portal } from "@mui/material";

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
      setUsedThemes(data.map((el) => el.theme));
    }
    return () => setUsedThemes([]);
  }, [data, isSuccess, setUsedThemes]);

  return (
    <MainLayout
      title={t("nav.pots")}
      btn={
        isSuccess && (
          <Btn onClick={() => setAddDialog(true)} size="small">
            + {t("pots.addnew.title")}
          </Btn>
        )
      }
    >
      {isLoading && <PotLoading />}
      {isError && <Error />}
      {isSuccess && <PotsList data={data} />}

      <Portal>
        <AddPot close={() => setAddDialog(false)} open={addDialog} />
      </Portal>
    </MainLayout>
  );
};

export default Pots;
