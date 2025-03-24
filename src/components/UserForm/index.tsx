import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import CustomInput from "../../ui/CustomInput";
import useFormSettings from "../../hooks/useSettings";
import { User } from "../../types";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/useAuthStore";
import Btn from "../../ui/Btn";
import Wrap from "../../ui/Wrap";
import File from "../../ui/File";
import useMutateData from "../../hooks/useMutateData";
import useFileUpload from "../../hooks/useFileUpload";

type FormData = Omit<User, "_id" | "role"> & {
  password: string;
};

const UserForm = (): JSX.Element => {
  const { settings } = useFormSettings();
  const { t } = useTranslation();
  const { userId, name: userName, email, setUser, avatar: stateAva } = useAuthStore();
  const queryClient = useQueryClient();
  const { avatar, avatarError, isDirtyAva, pickFile, removeFile } = useFileUpload();

  const {
    formState: { errors, isDirty },
    handleSubmit,
    register,
  } = useForm<FormData>({
    defaultValues: {
      name: userName,
    },
  });

  const { mutate, isPending } = useMutateData<any, FormData>({
    key: ["users"],
    method: "PATCH",
    uri: `/users/${userId}`,
  });

  const editUser = (data: FormData) => {
    mutate(
      { ...data, avatar },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
          setUser(data.data);
        },
      }
    );
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
            },
          }}
          error={errors.name ? true : false}
          helperText={errors.name?.message}
        />

        <File
          label={t("form.avatar.label")}
          helpertext={avatarError}
          ava={avatar}
          pickFn={(e: React.ChangeEvent<any>) => pickFile(e.target.files[0])}
          removeFn={removeFile}
        />

        <Btn type="submit" color="warning" fullWidth disabled={!isDirty && !isDirtyAva}>
          {isPending ? "..." : t("profile.editFormTitle")}
        </Btn>
      </form>
    </Wrap>
  );
};

export default UserForm;
