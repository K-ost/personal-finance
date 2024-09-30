import { MenuItem, TextFieldProps, Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import { potsColorOptions } from "../components/Pots/constants";
import { Circle } from "./IconTitle";

type ColorPickerProps = TextFieldProps & {
  defaultval?: string;
  usedthemes: string[];
};

const ColorPicker = (props: ColorPickerProps): JSX.Element => {
  const { defaultval, usedthemes } = props;

  const defaultValue = defaultval
    ? defaultval
    : potsColorOptions.filter((el) => !usedthemes.includes(el.value))[0].value;

  return (
    <CustomInput label="Theme" defaultValue={defaultValue} select {...props}>
      {potsColorOptions.map((option) => {
        const isUsed = usedthemes.some((el) => el === option.value);
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
