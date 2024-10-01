import CustomDialog from "../../ui/CustomDialog";
import { Typography } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import Btn from "../../ui/Btn";
import { Pot } from "../../types";
import { useForm } from "react-hook-form";
import { FORM_SETTINGS } from "../../utils/constants";
import useMutateData from "../../hooks/useMutateData";
import { useQueryClient } from "@tanstack/react-query";
import { useNotificationStore } from "../../store/useNotificationStore";
import { useEffect } from "react";
import { useThemesStore } from "../../store/useThemesStore";
import CustomSelect from "../../ui/CustomSelect";
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
  const { setNotification } = useNotificationStore();
  const { usedThemes } = useThemesStore();

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
  }, [pot]);

  const { mutate, isPending } = useMutateData<Pot, Omit<Pot, "id" | "total">>({
    key: ["pots"],
    method: "PATCH",
    uri: `/pots/${pot.id}`,
  });

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
          setNotification(`Pot "${pot.name}" has been edited`);
        },
      }
    );
  };

  return (
    <CustomDialog open={open} title="Edit Pot" close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        If your saving targets change, feel free to update your pots.
      </Typography>
      <form onSubmit={handleSubmit(editHandler)}>
        <CustomInput
          label="Pot Name"
          helperText={errors.name ? errors.name.message : "30 characters left"}
          inputProps={{ ...register("name", FORM_SETTINGS.name) }}
          error={errors.name ? true : false}
        />
        <CustomInput
          type="number"
          label="Target"
          adornment="$"
          inputProps={{ ...register("target", FORM_SETTINGS.target) }}
          error={errors.target ? true : false}
          helperText={errors.target && errors.target.message}
        />
        <CustomSelect
          label="Theme"
          inputProps={{ ...register("theme") }}
          options={potsColorOptions}
          usedoptions={usedThemes}
          defaultValue={pot.theme}
          colorpicker="true"
        />
        <Btn type="submit" fullWidth>
          {isPending ? "Loading..." : "Save Changes"}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default EditPot;
