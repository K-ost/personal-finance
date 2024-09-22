import { Slide, Snackbar } from "@mui/material";
import { useNotificationStore } from "../store/useNotificationStore";

const Notification = (): JSX.Element => {
  const { notification, setNotification } = useNotificationStore();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={!!notification}
      TransitionComponent={Slide}
      onClose={() => setNotification("")}
      message={notification}
      key="notification"
      autoHideDuration={5000}
    />
  );
};

export default Notification;
