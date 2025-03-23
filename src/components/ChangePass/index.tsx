import CustomInput from "../../ui/CustomInput";
import Wrap from "../../ui/Wrap";
import Btn from "../../ui/Btn";
import { useTranslation } from "react-i18next";

const ChangePass = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrap title={t("profile.password.title")}>
      <CustomInput label={t("profile.password.oldpass")} />
      <CustomInput label={t("profile.password.newpass")} />
      <Btn color="warning" fullWidth disabled>
        {t("profile.password.title")}
      </Btn>
    </Wrap>
  );
};

export default ChangePass;
