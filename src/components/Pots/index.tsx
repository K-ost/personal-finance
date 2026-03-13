import { Grid2 } from "@mui/material";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Pot } from "../../types/types";
import AlertBox from "../../ui/AlertBox";
import PotItem from "./PotItem";

type PotListProps = {
  data: Pot[];
};

const PotsList = (props: PotListProps): JSX.Element => {
  const { data } = props;
  const { t } = useTranslation();

  if (!data.length)
    return (
      <AlertBox title={t("alerts.noData.title")} color="info" severity="info">
        {t("alerts.noData.text")}
      </AlertBox>
    );

  return (
    <Grid2 container spacing={6}>
      {data.map((pot) => (
        <Grid2 key={pot._id} size={{ xs: 12, sm: 6 }}>
          <PotItem pot={pot} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default memo(PotsList);
