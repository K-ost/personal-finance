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
        target: data.target,
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
          setNotification(`Pot "${data.name}" has been added to the database`);
        },
      }
    );
  };

  return (
    <CustomDialog open={open} title="Add New Pot" close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Create a pot to set savings targets. These can help keep you on track as
        you save for special purchases.
      </Typography>
      <form onSubmit={handleSubmit(addHandler)}>
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
          inputProps={{
            ...register("target", FORM_SETTINGS.target),
          }}
          error={errors.target ? true : false}
          helperText={errors.target && errors.target.message}
        />

        <CustomSelect
          label="Theme"
          inputProps={{ ...register("theme") }}
          options={potsColorOptions}
          usedoptions={usedThemes}
          colorpicker="true"
        />

        {/* <ColorPicker
          inputProps={{ ...register("theme") }}
          usedthemes={usedThemes}
        /> */}
        <Btn type="submit" fullWidth>
          {isPending ? "Loading..." : "Add Pot"}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default AddPot;
