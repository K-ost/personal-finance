import CustomDialog from "../../ui/CustomDialog";
import { InputAdornment, MenuItem, Typography } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import Btn from "../../ui/Btn";
import { potsOptions } from "./constants";
import { Pot } from "../../types";
import { Circle } from "./PotItem";

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
      <CustomInput
        label="Target"
        defaultValue={pot.target}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
      />
      <CustomInput label="Theme" defaultValue={pot.theme} select>
        {potsOptions.map((option) => (
          <MenuItem key={option.name} value={option.value}>
            <Circle color={option.value} />
            {option.name}
          </MenuItem>
        ))}
      </CustomInput>
      <Btn fullWidth>Save Changes</Btn>
    </CustomDialog>
  );
};

export default EditPot;
