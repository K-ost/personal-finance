import { Box, FormHelperText, Input, InputLabel, Stack, styled } from "@mui/material";
import Btn from "./Btn";
import { useTranslation } from "react-i18next";

type FileProps = {
  ava: string;
  helpertext: string;
  label: string;
  pickFn: (e: React.ChangeEvent<any>) => void;
  removeFn: () => void;
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
  display: "block",
  marginRight: theme.spacing(2),
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
  const { ava, helpertext, label, pickFn, removeFn } = props;
  const { t } = useTranslation();

  return (
    <Box sx={{ mb: 4 }}>
      <InputLabel shrink={true}>{label}</InputLabel>
      <Stack direction="row">
        {ava && (
          <>
            <Ava src={ava} alt="" />
            <Btn
              type="button"
              variant="outlined"
              color="error"
              sx={{ mr: 2 }}
              onClick={removeFn}
            >
              {t("form.avatar.remove")}
            </Btn>
          </>
        )}
        <Field>
          <Btn type="button" variant="outlined" fullWidth>
            {t("form.avatar.upload")}
          </Btn>
          <FileInput
            type="file"
            slotProps={{
              input: {
                accept: "image/png, image/jpeg",
              },
            }}
            onChange={pickFn}
          />
        </Field>
      </Stack>
      {helpertext && (
        <FormHelperText sx={(theme) => ({ color: theme.palette.error.main })}>
          {helpertext}
        </FormHelperText>
      )}
    </Box>
  );
};

export default File;
