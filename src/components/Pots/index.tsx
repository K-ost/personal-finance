import { Grid2 } from "@mui/material";
import { Pot } from "../../types";
import PotItem from "./PotItem";
import { useTranslation } from "react-i18next";
import AlertBox from "../../ui/AlertBox";

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

export default PotsList;
