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
      slotProps={{
        input: {
          startAdornment: adornment ? (
            <InputAdornment position="start">{adornment}</InputAdornment>
          ) : undefined,
        },
        inputLabel: {
          shrink: true,
        },
      }}
      {...props}
    />
  );
};

export default CustomInput;
