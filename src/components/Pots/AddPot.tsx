import CustomDialog from "../../ui/CustomDialog";
import { Box, InputAdornment, MenuItem, Typography } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import Btn from "../../ui/Btn";
import { potsOptions } from "./constants";
import { Circle } from "./PotItem";

type AddPotProps = {
  close: () => void;
  open: boolean;
  usedThemes: string[];
};

const AddPot = (props: AddPotProps): JSX.Element => {
  const { close, open, usedThemes } = props;
  return (
    <CustomDialog open={open} title="Add New Pot" close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Create a pot to set savings targets. These can help keep you on track as
        you save for special purchases.
      </Typography>
      <CustomInput label="Pot Name" helperText="16 characters left" />
      <CustomInput
        label="Target"
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
      />
      <CustomInput label="Theme" defaultValue={potsOptions[0].value} select>
        {potsOptions.map((option) => {
          const isUsed = usedThemes.some((el) => el === option.value);
          return (
            <MenuItem key={option.name} value={option.value} disabled={isUsed}>
              <Circle color={option.value} />
              {option.name}
              {isUsed && (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ ml: "auto" }}
                >
                  Already used
                </Typography>
              )}
            </MenuItem>
          );
        })}
      </CustomInput>
      <Btn fullWidth>Add Pot</Btn>
    </CustomDialog>
  );
};

export default AddPot;
