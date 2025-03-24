import {
  Box,
  FormHelperText,
  Input,
  InputLabel,
  InputProps,
  Stack,
  styled,
} from "@mui/material";
import Btn from "./Btn";

type FileProps = InputProps & {
  ava: string;
  helpertext: string;
  label: string;
};

const AVA_SIZE = 52;

const Ava = styled("img")(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[500],
  borderRadius: 8,
  width: AVA_SIZE,
  height: AVA_SIZE,
  objectFit: "cover",
  marginRight: theme.spacing(2),
  display: "block",
}));

const Field = styled(Box)({
  position: "relative",
  flexGrow: 1,
});

const FileInput = styled(Input)({
  opacity: 0,
  position: "absolute",
  cursor: "pointer",
  left: 0,
  top: 0,
  height: AVA_SIZE,
  width: "100%",
  zIndex: 10,
});

const File = (props: FileProps): JSX.Element => {
  const { ava, helpertext, label } = props;

  return (
    <Box sx={{ mb: 4 }}>
      <InputLabel shrink={true}>{label}</InputLabel>
      <Stack direction="row">
        {ava && <Ava src={ava} alt="" />}
        <Field>
          <Btn type="button" variant="outlined" fullWidth>
            Upload
          </Btn>
          <FileInput type="file" {...props} />
        </Field>
      </Stack>
      {helpertext && <FormHelperText>{helpertext}</FormHelperText>}
    </Box>
  );
};

export default File;
