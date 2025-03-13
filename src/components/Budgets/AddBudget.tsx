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
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/useAuthStore";

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
  const { usedCategories, usedThemes } = useThemesStore();
  const setNotification = useNotificationStore((state) => state.setNotification);
  const userId = useAuthStore((state) => state.auth?.user._id);
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>();

  const { mutate, isPending } = useMutateData<Budget, FormData & { userId: string }>({
    key: ["budgets"],
    method: "POST",
    uri: "/budgets",
  });

  const addHandler = (data: FormData) => {
    mutate(
      {
        category: data.category,
        maximum: Number(data.maximum),
        theme: data.theme,
        userId: userId!,
      },
      {
        onSuccess: () => {
          reset();
          close();
          queryClient.invalidateQueries({
            queryKey: ["budgets"],
          });
          setNotification(t("budgets.addnew.notification", { title: data.category }));
        },
      }
    );
  };

  return (
    <CustomDialog close={close} open={open} title={t("budgets.addnew.title")}>
      <form onSubmit={handleSubmit(addHandler)}>
        <CustomSelect
          label={t("form.budgetCategory.label")}
          options={CategoriesOptions}
          usedoptions={usedCategories}
          inputProps={{ ...register("category") }}
        />

        <CustomInput
          label={t("form.maxSpend.label")}
          adornment="$"
          type="number"
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
        />

        <Btn type="submit" fullWidth>
          {isPending ? t("settings.loading") : t("budgets.addnew.btn")}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default AddBudget;
