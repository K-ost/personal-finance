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
    <div className="grid sm:grid-cols-2 gap-6">
      {data.map((pot) => (
        <PotItem key={pot._id} pot={pot} />
      ))}
    </div>
  );
};

export default memo(PotsList);
