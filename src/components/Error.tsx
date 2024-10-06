import AlertBox from "../ui/AlertBox";
import { useTranslation } from "react-i18next";

const Error = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <AlertBox
      severity="error"
      color="error"
      title={t("alerts.serverError.title")}
    >
      {t("alerts.serverError.text")}
    </AlertBox>
  );
};

export default Error;
