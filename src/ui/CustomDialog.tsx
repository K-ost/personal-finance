import {
  Dialog,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import iconClose from "../assets/icon-close-modal.svg";

type CustomDialogProps = {
  children: React.ReactNode;
  close: () => void;
  open: boolean;
  title: string;
};

const CustomDialog = (props: CustomDialogProps): JSX.Element => {
  const { children, close, open, title } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={(theme) => ({
        "& .MuiPaper-root": {
          borderRadius: "12px",
          p: theme.spacing(8),
          maxWidth: 560,
          width: "100%",
          [theme.breakpoints.down("sm")]: {
            p: `${theme.spacing(6)} ${theme.spacing(5)}`,
            maxWidth: 335,
          },
        },
      })}
    >
      <Typography variant={isMobile ? "h2" : "h1"}>{title}</Typography>
      <IconButton
        onClick={close}
        sx={(theme) => ({
          position: "absolute",
          right: theme.spacing(8),
          top: theme.spacing(8),
          padding: 0,
          [theme.breakpoints.down("sm")]: {
            right: theme.spacing(5),
            top: theme.spacing(6),
          },
        })}
      >
        <img src={iconClose} alt="" />
      </IconButton>
      {children}
    </Dialog>
  );
};

export default CustomDialog;
