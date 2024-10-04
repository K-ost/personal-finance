import CustomDialog from "../../ui/CustomDialog";
import { Typography } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import Btn from "../../ui/Btn";
import { useForm } from "react-hook-form";
import { Pot } from "../../types";
import useMutateData from "../../hooks/useMutateData";
import { useQueryClient } from "@tanstack/react-query";
import { useNotificationStore } from "../../store/useNotificationStore";
import { FORM_SETTINGS } from "../../utils/constants";
import { useThemesStore } from "../../store/useThemesStore";
import CustomSelect from "../../ui/CustomSelect";
import { potsColorOptions } from "./constants";
import { useTranslation } from "react-i18next";

type AddPotProps = {
  close: () => void;
  open: boolean;
};

type FormData = Omit<Pot, "id" | "total">;

const AddPot = (props: AddPotProps): JSX.Element => {
  const { close, open } = props;
  const queryClient = useQueryClient();
  const { setNotification } = useNotificationStore();
  const { usedThemes } = useThemesStore();
  const { t } = useTranslation();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>();

  const { isPending, mutate } = useMutateData<Pot, Omit<Pot, "id">>({
    key: ["pots"],
    method: "POST",
    uri: "/pots",
  });

  const addHandler = (data: FormData) => {
    mutate(
      {
        name: data.name,
        target: Number(data.target),
        theme: data.theme,
        total: 0,
      },
      {
        onSuccess: () => {
          close();
          reset();
          queryClient.invalidateQueries({
            queryKey: ["pots"],
          });
          setNotification(t("pots.addnew.notification", { title: data.name }));
        },
      }
    );
  };

  return (
    <CustomDialog open={open} title={t("pots.addnew.title")} close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        {t("pots.addnew.text")}
      </Typography>
      <form onSubmit={handleSubmit(addHandler)} data-testid="form1">
        <CustomInput
          label={t("form.potname.label")}
          helperText={
            errors.name ? errors.name.message : t("form.potname.helper")
          }
          inputProps={{
            ...register("name", FORM_SETTINGS.name),
            "data-testid": "name",
          }}
          error={errors.name ? true : false}
        />

        <CustomInput
          type="number"
          label={t("form.target.label")}
          adornment="$"
          inputProps={{
            ...register("target", FORM_SETTINGS.target),
          }}
          error={errors.target ? true : false}
          helperText={errors.target && errors.target.message}
        />

        <CustomSelect
          label={t("form.theme.label")}
          inputProps={{
            ...register("theme"),
          }}
          options={potsColorOptions}
          usedoptions={usedThemes}
          colorpicker="true"
        />

        <Btn type="submit" fullWidth data-test="submitNewPot">
          {isPending ? "Loading..." : t("pots.addnew.btn")}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default AddPot;
