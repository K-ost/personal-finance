import CustomDialog from "../../ui/CustomDialog";
import { Typography } from "@mui/material";
import Btn from "../../ui/Btn";
import { Pot } from "../../types";

type DeletePotProps = {
  close: () => void;
  open: boolean;
  pot: Pot;
};

const DeletePot = (props: DeletePotProps): JSX.Element => {
  const { close, open, pot } = props;
  return (
    <CustomDialog open={open} title={`Delete '${pot.name}'?`} close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Are you sure you want to delete this pot? This action cannot be
        reversed, and all the data inside it will be removed forever.
      </Typography>
      <Btn color="error" fullWidth sx={{ mb: 2 }}>
        Yes, Confirm Deletion
      </Btn>
      <Btn variant="text" fullWidth onClick={close}>
        No, Go Back
      </Btn>
    </CustomDialog>
  );
};

export default DeletePot;
