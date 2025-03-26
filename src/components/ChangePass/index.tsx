import CustomInput from "../../ui/CustomInput";
import Wrap from "../../ui/Wrap";
import Btn from "../../ui/Btn";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import useFormSettings from "../../hooks/useSettings";
import useMutateData from "../../hooks/useMutateData";
import { useAuthStore } from "../../store/useAuthStore";
import { useNotificationStore } from "../../store/useNotificationStore";

type FormData = {
  oldPass: string;
  newPass: string;
};

const ChangePass = (): JSX.Element => {
  const { t } = useTranslation();
  const { settings } = useFormSettings();
  const userId = useAuthStore((state) => state.userId);
  const setNotification = useNotificationStore((state) => state.setNotification);

  const {
    formState: { errors, isDirty },
    handleSubmit,
    register,
    watch,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      oldPass: "",
      newPass: "",
    },
  });

  const { mutate, isPending } = useMutateData<{ msg: string }, FormData>({
    key: ["pass"],
    method: "PATCH",
    uri: `/users/password/${userId}`,
  });

  const changePassword = (data: FormData) => {
    mutate(data, {
      onSuccess: (response) => {
        setNotification(response.msg);
        reset();
      },
    });
  };

  return (
    <Wrap title={t("profile.password.title")}>
      <form onSubmit={handleSubmit(changePassword)}>
        <CustomInput
          type="password"
          label={t("profile.password.oldpass")}
          slotProps={{
            input: {
              ...register("oldPass", settings.password),
            },
          }}
          error={errors.oldPass ? true : false}
          helperText={errors.oldPass && errors.oldPass.message}
        />

        <CustomInput
          type="password"
          label={t("profile.password.newpass")}
          slotProps={{
            input: {
              ...register("newPass", {
                ...settings.password,
                validate: (val: string) => {
                  if (val === watch("oldPass")) {
                    return t("form.newPass.error");
                  }
                },
              }),
            },
          }}
          error={errors.newPass ? true : false}
          helperText={errors.newPass && errors.newPass.message}
        />

        <Btn type="submit" color="warning" fullWidth disabled={!isDirty}>
          {isPending ? "Loading..." : t("profile.password.title")}
        </Btn>
      </form>
    </Wrap>
  );
};

export default ChangePass;
