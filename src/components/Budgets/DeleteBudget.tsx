import { Typography } from "@mui/material";
import CustomDialog from "../../ui/CustomDialog";
import Btn from "../../ui/Btn";
import useMutateData from "../../hooks/useMutateData";
import { useQueryClient } from "@tanstack/react-query";
import { useNotificationStore } from "../../store/useNotificationStore";
import { Budget } from "../../types";
import { useTranslation } from "react-i18next";

type DeleteBudgetProps = {
  budget: Budget;
  close: () => void;
  open: boolean;
};

const DeleteBudget = (props: DeleteBudgetProps): JSX.Element => {
  const { budget, close, open } = props;
  const { setNotification } = useNotificationStore();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const { mutate, isPending } = useMutateData({
    key: ["budgets"],
    method: "DELETE",
    uri: `/budgets/${budget._id}`,
  });

  const deleteHandler = () => {
    mutate(undefined, {
      onSuccess: () => {
        close();
        queryClient.invalidateQueries({
          queryKey: ["budgets"],
        });
        setNotification(t("budgets.delete.notification", { title: budget.category }));
      },
    });
  };

  return (
    <CustomDialog
      close={close}
      open={open}
      title={t("budgets.delete.title", { title: budget.category })}
    >
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        {t("budgets.delete.text")}
      </Typography>

      <Btn color="error" fullWidth sx={{ mb: 2 }} onClick={deleteHandler}>
        {isPending ? t("settings.loading") : t("budgets.delete.btn")}
      </Btn>
      <Btn variant="text" fullWidth onClick={close}>
        {t("budgets.delete.cancel")}
      </Btn>
    </CustomDialog>
  );
};

export default DeleteBudget;
