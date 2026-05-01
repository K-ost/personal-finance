import { useTranslation } from "react-i18next";

import AlertBox from "./AlertBox";

type ErrorProps = {
  text?: string;
};

const Error = (props: ErrorProps): JSX.Element => {
  const { t } = useTranslation();
  const { text = t("alerts.serverError.text") } = props;
  return (
    <AlertBox severity="error" color="error" title={t("alerts.serverError.title")}>
      {text}
    </AlertBox>
  );
};

export default Error;
