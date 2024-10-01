import { Typography } from "@mui/material";
import CustomDialog from "../../ui/CustomDialog";
import Btn from "../../ui/Btn";
import useMutateData from "../../hooks/useMutateData";
import { useQueryClient } from "@tanstack/react-query";
import { useNotificationStore } from "../../store/useNotificationStore";
import { Budget } from "../../types";

type DeleteBudgetProps = {
  budget: Budget;
  close: () => void;
  open: boolean;
};

const DeleteBudget = (props: DeleteBudgetProps): JSX.Element => {
  const { budget, close, open } = props;
  const { setNotification } = useNotificationStore();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutateData({
    key: ["budgets"],
    method: "DELETE",
    uri: `/budgets/${budget.id}`,
  });

  const deleteHandler = () => {
    mutate(undefined, {
      onSuccess: () => {
        close();
        queryClient.invalidateQueries({
          queryKey: ["budgets"],
        });
        setNotification(
          `Budget of category "${budget.category}" has been deleted`
        );
      },
    });
  };

  return (
    <CustomDialog
      close={close}
      open={open}
      title={`Delete "${budget.category}"?`}
    >
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Are you sure you want to delete this budget? This action cannot be
        reversed, and all the data inside it will be removed forever.
      </Typography>

      <Btn color="error" fullWidth sx={{ mb: 2 }} onClick={deleteHandler}>
        {isPending ? "Loading..." : "Yes, Confirm Deletion"}
      </Btn>
      <Btn variant="text" fullWidth onClick={close}>
        No, Go Back
      </Btn>
    </CustomDialog>
  );
};

export default DeleteBudget;
