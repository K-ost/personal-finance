import CustomDialog from "../../ui/CustomDialog";
import { InputAdornment, Typography } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import Btn from "../../ui/Btn";
import { Pot } from "../../types";
import ColorPicker from "../../ui/ColorPicker";

type EditPotProps = {
  close: () => void;
  open: boolean;
  pot: Pot;
};

const EditPot = (props: EditPotProps): JSX.Element => {
  const { close, open, pot } = props;
  return (
    <CustomDialog open={open} title="Edit Pot" close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        If your saving targets change, feel free to update your pots.
      </Typography>
      <CustomInput
        label="Pot Name"
        helperText="16 characters left"
        defaultValue={pot.name}
      />
      <CustomInput label="Target" defaultValue={pot.target} adornment="$" />
      <ColorPicker />
      <Btn fullWidth>Save Changes</Btn>
    </CustomDialog>
  );
};

export default EditPot;
