import { MenuItem, TextFieldProps, Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import { Circle } from "../components/Pots/PotItem";
import { potsColorOptions } from "../components/Pots/constants";
import { usePotsStore } from "../store/usePotsStore";

const ColorPicker = (props: TextFieldProps): JSX.Element => {
  const { usedThemes } = usePotsStore();

  return (
    <CustomInput
      label="Theme"
      defaultValue={potsColorOptions[0].value}
      select
      {...props}
    >
      {potsColorOptions.map((option) => {
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
  );
};

export default ColorPicker;
