import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import { useState } from "react";

import VisibilityOff from "../assets/icon-hide-password.svg";
import Visibility from "../assets/icon-show-password.svg";
import CustomInput from "./CustomInput";

const PassInput = (props: TextFieldProps): JSX.Element => {
  const [showPass, setShowPass] = useState<boolean>(false);
  return (
    <CustomInput
      type={showPass ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPass(!showPass)}
                edge="end"
              >
                <img src={showPass ? VisibilityOff : Visibility} alt="" />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

export default PassInput;
