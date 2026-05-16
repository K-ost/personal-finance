import { Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { FORM_SETTINGS } from "../../constants/constants";
import useMutateData from "../../hooks/useMutateData";
import { useUserId } from "../../store/useAuthStore";
import { useNotificationStore } from "../../store/useNotificationStore";
import { useThemesStore } from "../../store/useThemesStore";
import { Pot } from "../../types/types";
import Btn from "../../ui/Btn";
import CustomDialog from "../../ui/CustomDialog";
import CustomSelect from "../../ui/CustomSelect";
import InputField from "../../ui/InputField";
import { potsColorOptions } from "./constants";

type AddPotProps = {
  close: () => void;
  open: boolean;
};

type FormData = Omit<Pot, "id" | "total">;

const AddPot = (props: AddPotProps): JSX.Element => {
  const { close, open } = props;
  const queryClient = useQueryClient();
  const setNotification = useNotificationStore((state) => state.setNotification);
  const usedThemes = useThemesStore((state) => state.usedThemes);
  const { t } = useTranslation();
  const userId = useUserId();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>();

  const { isPending, mutate } = useMutateData<Pot, Omit<Pot, "_id">>({
    key: ["pots"],
    method: "POST",
    uri: "/pots",
  });

  const addHandler = (data: FormData) => {
    if (!userId) return;
    const newPot: Omit<Pot, "_id"> = {
      name: data.name,
      target: Number(data.target),
      theme: data.theme,
      total: 0,
      userId,
    };
    mutate(newPot, {
      onSuccess() {
        close();
        reset();
        queryClient.invalidateQueries({
          queryKey: ["pots"],
        });
        setNotification(t("pots.addnew.notification", { title: data.name }));
      },
    });
  };

  return (
    <CustomDialog open={open} title={t("pots.addnew.title")} close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        {t("pots.addnew.text")}
      </Typography>

      <form onSubmit={handleSubmit(addHandler)} data-testid="form1">
        <div className="mb-4">
          <InputField
            label={t("form.potname.label")}
            inputProps={{
              "aria-label": t("form.potname.label"),
              ...register("name", FORM_SETTINGS.name),
            }}
            isError={errors.name ? true : false}
            helper={errors.name && errors.name.message}
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
          slotProps={{
            input: {
              ...register("theme"),
            },
          }}
          options={potsColorOptions}
          usedoptions={usedThemes}
          colorpicker="true"
        />

        <Btn type="submit" fullWidth data-test="submitNewPot">
          {isPending ? t("settings.loading") : t("pots.addnew.btn")}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default AddPot;
