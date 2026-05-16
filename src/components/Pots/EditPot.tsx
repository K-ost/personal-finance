import { Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { FORM_SETTINGS } from "../../constants/constants";
import useMutateData from "../../hooks/useMutateData";
import { useNotificationStore } from "../../store/useNotificationStore";
import { useThemesStore } from "../../store/useThemesStore";
import { Pot } from "../../types/types";
import Btn from "../../ui/Btn";
import CustomDialog from "../../ui/CustomDialog";
import CustomSelect from "../../ui/CustomSelect";
import InputField from "../../ui/InputField";
import { potsColorOptions } from "./constants";

type EditPotProps = {
  close: () => void;
  open: boolean;
  pot: Pot;
};

type FormData = Omit<Pot, "id" | "total">;

const EditPot = (props: EditPotProps): JSX.Element => {
  const { close, open, pot } = props;
  const queryClient = useQueryClient();
  const setNotification = useNotificationStore((state) => state.setNotification);
  const usedThemes = useThemesStore((state) => state.usedThemes);
  const { t } = useTranslation();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: pot.name,
      target: pot.target,
      theme: pot.theme,
    },
  });

  useEffect(() => {
    reset(pot);
  }, [pot, reset]);

  const { mutate, isPending } = useMutateData<Pot, Omit<Pot, "_id" | "total" | "userId">>(
    {
      key: ["pots"],
      method: "PATCH",
      uri: `/pots/${pot._id}`,
    },
  );

  const editHandler = (data: FormData) => {
    mutate(
      {
        name: data.name,
        target: data.target,
        theme: data.theme,
      },
      {
        onSuccess: () => {
          reset();
          close();
          queryClient.invalidateQueries({
            queryKey: ["pots"],
          });
          setNotification(t("pots.edit.notification", { title: data.name }));
        },
      },
    );
  };

  return (
    <CustomDialog open={open} title={t("pots.edit.title")} close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        {t("pots.edit.text")}
      </Typography>
      <form onSubmit={handleSubmit(editHandler)}>
        <div className="mb-4">
          <InputField
            label={t("form.potname.label")}
            inputProps={{
              "aria-label": t("form.potname.label"),
              ...register("name", FORM_SETTINGS.name),
            }}
            isError={errors.name ? true : false}
            helper={errors.name ? errors.name.message : t("form.potname.helper")}
          />
        </div>

        <div className="mb-4">
          <InputField
            label={t("form.target.label")}
            leftAdornment="$"
            inputProps={{
              type: "number",
              "aria-label": t("form.target.label"),
              ...register("target", FORM_SETTINGS.target),
            }}
            isError={errors.target ? true : false}
            helper={errors.target && errors.target.message}
          />
        </div>

        <CustomSelect
          label={t("form.theme.label")}
          inputProps={{ ...register("theme") }}
          options={potsColorOptions}
          usedoptions={usedThemes}
          defaultValue={pot.theme}
          colorpicker="true"
        />
        <Btn type="submit" fullWidth>
          {isPending ? t("settings.loading") : t("pots.edit.btn")}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default EditPot;
