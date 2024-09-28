import CustomDialog from "../../ui/CustomDialog";
import { Typography } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import Btn from "../../ui/Btn";
import ColorPicker from "../../ui/ColorPicker";

type AddPotProps = {
  close: () => void;
  open: boolean;
};

const AddPot = (props: AddPotProps): JSX.Element => {
  const { close, open } = props;
  return (
    <CustomDialog open={open} title="Add New Pot" close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Create a pot to set savings targets. These can help keep you on track as
        you save for special purchases.
      </Typography>
      <CustomInput label="Pot Name" helperText="16 characters left" />
      <CustomInput label="Target" adornment="$" />
      <ColorPicker />
      <Btn fullWidth>Add Pot</Btn>
    </CustomDialog>
  );
};

export default AddPot;
