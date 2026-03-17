import { ButtonProps } from "@mui/material";

import { CustomButton } from "./styles";

const Btn = (props: ButtonProps): JSX.Element => {
  return <CustomButton variant="contained" {...props} />;
};

export default Btn;
