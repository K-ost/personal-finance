import { Typography } from "@mui/material";
import CustomDialog from "../../ui/CustomDialog";
import CustomInput from "../../ui/CustomInput";
import { CategoriesOptions } from "./constants";
import { useThemesStore } from "../../store/useThemesStore";
import { useForm } from "react-hook-form";
import Btn from "../../ui/Btn";
import { FORM_SETTINGS } from "../../utils/constants";
import useMutateData from "../../hooks/useMutateData";
import { Budget } from "../../types";
import { useQueryClient } from "@tanstack/react-query";
import { useNotificationStore } from "../../store/useNotificationStore";
import CustomSelect from "../../ui/CustomSelect";
import { potsColorOptions } from "../Pots/constants";
import { useEffect } from "react";

type EditBudgetProps = {
  budget: Budget;
  close: () => void;
  open: boolean;
};

type FormData = {
  category: string;
  maximum: number;
  theme: string;
};

const EditBudget = (props: EditBudgetProps): JSX.Element => {
  const { budget, close, open } = props;
  const { usedCategories, usedThemes } = useThemesStore();
  const { setNotification } = useNotificationStore();
  const queryClient = useQueryClient();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      category: budget.category,
      maximum: budget.maximum,
      theme: budget.theme,
    },
  });

  useEffect(() => {
    reset(budget);
  }, [budget, reset]);

  const { mutate, isPending } = useMutateData<Budget, FormData>({
    key: ["budgets"],
    method: "PATCH",
    uri: `/budgets/${budget.id}`,
  });

  const editHandler = (data: FormData) => {
    mutate(
      {
        category: data.category,
        maximum: Number(data.maximum),
        theme: data.theme,
      },
      {
        onSuccess: () => {
          reset();
          close();
          queryClient.invalidateQueries({
            queryKey: ["budgets"],
          });
          setNotification("Your budget has been edited");
        },
      }
    );
  };

  return (
    <CustomDialog close={close} open={open} title="Edit Budget">
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
      </Typography>
      <form onSubmit={handleSubmit(editHandler)}>
        <CustomSelect
          label="Budget Category"
          options={CategoriesOptions}
          usedoptions={usedCategories}
          inputProps={{ ...register("category") }}
          defaultValue={budget.category}
        />

        <CustomInput
          label="Maximum Spending"
          adornment="$"
          inputProps={{ ...register("maximum", FORM_SETTINGS.target) }}
          error={errors.maximum ? true : false}
          helperText={errors.maximum && errors.maximum.message}
        />

        <CustomSelect
          label="Theme"
          options={potsColorOptions}
          usedoptions={usedThemes}
          colorpicker="true"
          inputProps={{ ...register("theme") }}
          defaultValue={budget.theme}
        />

        <Btn type="submit" fullWidth>
          {isPending ? "Loading..." : "Save Changes"}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default EditBudget;
