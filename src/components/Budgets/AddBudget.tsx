import { MenuItem, Typography } from "@mui/material";
import CustomDialog from "../../ui/CustomDialog";
import CustomInput from "../../ui/CustomInput";
import ColorPicker from "../../ui/ColorPicker";
import { CategoriesOptions } from "./constants";
import { useThemesStore } from "../../store/useThemesStore";
import { useForm } from "react-hook-form";
import Btn from "../../ui/Btn";
import { FORM_SETTINGS } from "../../utils/constants";
import useMutateData from "../../hooks/useMutateData";
import { Budget } from "../../types";
import { useQueryClient } from "@tanstack/react-query";
import { useNotificationStore } from "../../store/useNotificationStore";

type AddBudgetProps = {
  close: () => void;
  open: boolean;
};

type FormData = {
  category: string;
  maximum: number;
  theme: string;
};

const AddBudget = (props: AddBudgetProps): JSX.Element => {
  const { close, open } = props;
  const { usedThemes } = useThemesStore();
  const { setNotification } = useNotificationStore();
  const queryClient = useQueryClient();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>();

  const { mutate, isPending } = useMutateData<Budget, FormData>({
    key: ["budgets"],
    method: "POST",
    uri: "/budgets",
  });

  const addHandler = (data: FormData) => {
    mutate(
      {
        category: data.category,
        maximum: data.maximum,
        theme: data.theme,
      },
      {
        onSuccess: () => {
          reset();
          close();
          queryClient.invalidateQueries({
            queryKey: ["budgets"],
          });
          setNotification("Your budget has been added");
        },
      }
    );
  };

  return (
    <CustomDialog close={close} open={open} title="Add New Budget">
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
      </Typography>
      <form onSubmit={handleSubmit(addHandler)}>
        <CustomInput
          label="Budget Category"
          select
          defaultValue={CategoriesOptions[0].value}
          inputProps={{ ...register("category") }}
        >
          {CategoriesOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </CustomInput>
        <CustomInput
          label="Maximum Spending"
          adornment="$"
          inputProps={{ ...register("maximum", FORM_SETTINGS.target) }}
          error={errors.maximum ? true : false}
          helperText={errors.maximum && errors.maximum.message}
        />
        <ColorPicker
          usedthemes={usedThemes}
          inputProps={{ ...register("theme") }}
        />
        <Btn type="submit" fullWidth>
          {isPending ? "Loading..." : "Add Budget"}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default AddBudget;
