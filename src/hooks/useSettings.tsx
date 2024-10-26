import { useTranslation } from "react-i18next";

const useFormSettings = () => {
  const { t } = useTranslation();
  return {
    settings: {
      email: {
        required: t("form.settings.required"),
        pattern: {
          message: t("form.settings.incorrect"),
          value: /^\S+@\S+$/i,
        },
      },
      password: {
        required: t("form.settings.required"),
        minLength: {
          value: 6,
          message: t("form.settings.min6"),
        },
      },
      name: {
        required: t("form.settings.required"),
        minLength: { message: t("form.settings.min4"), value: 4 },
        maxLength: {
          message: t("form.settings.max30"),
          value: 30,
        },
      },
      target: {
        required: t("form.settings.required"),
      },
      totalChange: {
        required: t("form.settings.required"),
        min: {
          value: 10,
          message: t("form.settings.amount"),
        },
      },
    },
  };
};

export default useFormSettings;
