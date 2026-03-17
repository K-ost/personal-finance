import { InputAdornment, TextFieldProps } from "@mui/material";

import { Input } from "./styles";

type CustomInputProps = TextFieldProps & {
  adornment?: string;
};

const CustomInput = (props: CustomInputProps): JSX.Element => {
  const { adornment } = props;
  return (
    <Input
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      slotProps={
        adornment
          ? {
              input: {
                startAdornment: (
                  <InputAdornment position="start">{adornment}</InputAdornment>
                ),
              },
            }
          : undefined
      }
      {...props}
    />
  );
};

export default CustomInput;
