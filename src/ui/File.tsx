import { TextFieldProps } from "@mui/material";
import CustomInput from "./CustomInput";

const File = (props: TextFieldProps): JSX.Element => {
  return (
    <CustomInput
      type="file"
      {...props}
      slotProps={{
        htmlInput: {
          accept: "image/png, image/jpeg",
        },
      }}
    />
  );
};

export default File;
