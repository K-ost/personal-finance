import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import CustomInput from "../../ui/CustomInput";
import useFormSettings from "../../hooks/useSettings";
import { User } from "../../types";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/useAuthStore";
import Btn from "../../ui/Btn";
import Wrap from "../../ui/Wrap";
import useMutateData from "../../hooks/useMutateData";
import { useNotificationStore } from "../../store/useNotificationStore";

type FormData = Omit<User, "_id" | "role"> & {
  password: string;
};

const UserForm = (): JSX.Element => {
  const { settings } = useFormSettings();
  const { t } = useTranslation();
  const setNotification = useNotificationStore((state) => state.setNotification);
  const { userId, avatar: userAvatar, name: userName, email, setUser } = useAuthStore();
  const queryClient = useQueryClient();

  const {
    formState: { errors, isDirty },
    handleSubmit,
    register,
  } = useForm<FormData>({
    defaultValues: {
      avatar: userAvatar,
      name: userName,
    },
  });

  const { mutate, isPending } = useMutateData<any, FormData>({
    key: ["users"],
    method: "PATCH",
    uri: `/users/${userId}`,
  });

  const editUser = (data: FormData) => {
    mutate(data, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
        setNotification(data.msg);
        setUser(data.data);
      },
    });
  };

  return (
    <Wrap title={t("profile.userinfo.title")}>
      <form onSubmit={handleSubmit(editUser)} noValidate>
        <CustomInput
          label={t("form.email.label")}
          type="email"
          defaultValue={email}
          disabled
        />

        <CustomInput
          label={t("form.name.label")}
          type="text"
          slotProps={{
            input: {
              ...register("name", settings.name),
              "aria-label": "Name",
            },
          }}
          error={errors.name ? true : false}
          helperText={errors.name?.message}
        />

        <CustomInput
          label={t("form.avatar.label")}
          type="search"
          slotProps={{
            input: {
              ...register("avatar"),
              "aria-label": "Avatar",
            },
          }}
          helperText={t("form.avatar.helper")}
        />

        <Btn type="submit" color="warning" fullWidth disabled={!isDirty}>
          {isPending ? "Loading..." : t("profile.editFormTitle")}
        </Btn>
      </form>
    </Wrap>
  );
};

export default UserForm;
