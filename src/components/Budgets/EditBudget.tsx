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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
    uri: `/budgets/${budget._id}`,
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
          setNotification(t("budgets.edit.notification", { title: data.category }));
        },
      }
    );
  };

  return (
    <CustomDialog close={close} open={open} title={t("budgets.edit.title")}>
      <form onSubmit={handleSubmit(editHandler)}>
        <CustomSelect
          label={t("form.budgetCategory.label")}
          options={CategoriesOptions}
          usedoptions={usedCategories}
          inputProps={{ ...register("category") }}
          defaultValue={budget.category}
        />

        <CustomInput
          label={t("form.maxSpend.label")}
          adornment="$"
          inputProps={{ ...register("maximum", FORM_SETTINGS.target) }}
          error={errors.maximum ? true : false}
          helperText={errors.maximum && errors.maximum.message}
        />

        <CustomSelect
          label={t("form.theme.label")}
          options={potsColorOptions}
          usedoptions={usedThemes}
          colorpicker="true"
          inputProps={{ ...register("theme") }}
          defaultValue={budget.theme}
        />

        <Btn type="submit" fullWidth>
          {isPending ? t("settings.loading") : t("budgets.edit.btn")}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default EditBudget;
