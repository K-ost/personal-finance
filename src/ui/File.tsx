import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";
import CustomInput from "./CustomInput";

type FileProps = TextFieldProps & {
  ava: string;
};

const Ava = styled("img")(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[500],
  borderRadius: 6,
  width: 45,
  height: 45,
  objectFit: "cover",
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

const File = (props: FileProps): JSX.Element => {
  const { ava } = props;
  return (
    // <CustomInput
    //   type="file"
    //   {...props}
    //   slotProps={{
    //     htmlInput: {
    //       accept: "image/png, image/jpeg",
    //     },
    //     input: {
    //       startAdornment: ava && <Ava src={ava} alt="" />,
    //     },
    //   }}
    // />
    <FormControl>
      <InputLabel shrink={true}>Email address</InputLabel>
      <Stack direction="row">
        {ava && <Ava src={ava} alt="" />}
        <Input type="file" />
      </Stack>
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  );
};

export default File;
