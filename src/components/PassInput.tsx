import { useState } from "react";

import VisibilityOff from "../assets/icon-hide-password.svg";
import Visibility from "../assets/icon-show-password.svg";
import InputField from "../ui/InputField";

type PassInputProps = {
  isError?: boolean;
  helper?: string;
  label?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const PassInput = (props: PassInputProps): JSX.Element => {
  const { isError, helper, label, inputProps } = props;
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <InputField
      isError={isError}
      helper={helper}
      label={label}
      rightAdornment={
        <button
          type="button"
          className="w-8 h-8 cursor-pointer border-0 bg-none outline-0 flex items-center justify-center -mr-2"
          aria-label="toggle password visibility"
          onClick={() => setShowPass(!showPass)}
        >
          <img src={showPass ? VisibilityOff : Visibility} alt="" />
        </button>
      }
      inputProps={{
        type: showPass ? "text" : "password",
        ...inputProps,
      }}
    />
  );
};

export default PassInput;
