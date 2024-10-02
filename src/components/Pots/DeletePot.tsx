import CustomDialog from "../../ui/CustomDialog";
import { Typography } from "@mui/material";
import Btn from "../../ui/Btn";
import { Pot } from "../../types";
import useMutateData from "../../hooks/useMutateData";
import { useQueryClient } from "@tanstack/react-query";
import { useNotificationStore } from "../../store/useNotificationStore";
import { useTranslation } from "react-i18next";

type DeletePotProps = {
  close: () => void;
  open: boolean;
  pot: Pot;
};

const DeletePot = (props: DeletePotProps): JSX.Element => {
  const { close, open, pot } = props;
  const queryClient = useQueryClient();
  const { setNotification } = useNotificationStore();
  const { t } = useTranslation();

  const { mutate, isPending } = useMutateData({
    key: ["pots"],
    method: "DELETE",
    uri: `/pots/${pot.id}`,
  });

  const deleteHandler = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          close();
          queryClient.invalidateQueries({
            queryKey: ["pots"],
          });
          setNotification(
            `Pot "${pot.name}" has been deleted from the database`
          );
        },
      }
    );
  };

  return (
    <CustomDialog
      open={open}
      title={t("pots.delete.title", { title: pot.name })}
      close={close}
    >
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        {t("pots.delete.text")}
      </Typography>
      <Btn color="error" fullWidth sx={{ mb: 2 }} onClick={deleteHandler}>
        {isPending ? "Loading..." : t("pots.delete.btn")}
      </Btn>
      <Btn variant="text" fullWidth onClick={close}>
        {t("pots.delete.cancel")}
      </Btn>
    </CustomDialog>
  );
};

export default DeletePot;
