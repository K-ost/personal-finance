import { Portal } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";
import PotsList from "../components/Pots";
import AddPot from "../components/Pots/AddPot";
import PotLoading from "../components/Pots/PotLoading";
import { POTS_URI } from "../constants/constants";
import useGetData from "../hooks/useGetData";
import { useUserId } from "../store/useAuthStore";
import { useThemesStore } from "../store/useThemesStore";
import { Pot } from "../types/types";
import Btn from "../ui/Btn";
import Error from "../ui/Error";

const Pots = (): JSX.Element => {
  const { t } = useTranslation();
  const [addDialog, setAddDialog] = useState<boolean>(false);
  const setUsedThemes = useThemesStore((state) => state.setUsedThemes);
  const userId = useUserId();

  const { data, isLoading, isSuccess, isError } = useGetData<Pot[]>({
    key: ["pots"],
    uri: POTS_URI + `?userId=${userId}`,
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
