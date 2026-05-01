import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";

import { useNotification, useNotificationStore } from "../store/useNotificationStore";

const Notification = (): JSX.Element => {
  const setNotification = useNotificationStore((state) => state.setNotification);
  const notification = useNotification();
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
