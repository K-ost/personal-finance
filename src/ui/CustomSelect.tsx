import { MenuItem, TextFieldProps, Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import { SelectOption } from "../types";
import { Circle } from "./IconTitle";

type CustomSelectProps = TextFieldProps & {
  defaultval?: string;
  usedoptions?: string[];
  options: SelectOption[];
  colorpicker?: "true" | "false";
};

const CustomSelect = (props: CustomSelectProps): JSX.Element => {
  const { colorpicker = "false", defaultval, usedoptions, options } = props;

  const defaultValue = defaultval
    ? defaultval
    : usedoptions &&
      options.filter((el) => !usedoptions.includes(el.value))[0].value;

  return (
    <CustomInput defaultValue={defaultValue} select {...props}>
      {options.map((option) => {
        const isUsed =
          usedoptions && usedoptions.some((el) => el === option.value);
        return (
          <MenuItem key={option.name} value={option.value} disabled={isUsed}>
            {colorpicker === "true" && <Circle color={option.value} />}
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

export default CustomSelect;
