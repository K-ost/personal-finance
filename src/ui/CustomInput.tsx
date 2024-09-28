import {
  InputAdornment,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";

type CustomInputProps = TextFieldProps & {
  adornment?: string;
};

const Input = styled(TextField)<TextFieldProps>(({ theme }) => ({
  display: "block",
  marginBottom: theme.spacing(4),
  "& .MuiFormLabel-root": {
    color: theme.palette.custom.grey500,
    fontWeight: 700,
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
    left: "auto",
    marginBottom: 4,
    top: "auto",
    position: "relative",
    transform: "none",
    "&.Mui-focused": {
      color: theme.palette.custom.grey500,
    },
  },
  "& .MuiInputBase-root": {
    display: "flex",
  },
  "& .MuiOutlinedInput-input": {
    boxSizing: "border-box",
    color: theme.palette.custom.grey900,
    fontSize: theme.typography.body1.fontSize,
    fontFamily: theme.typography.fontFamily,
    lineHeight: theme.typography.body1.lineHeight,
    height: 45,
    padding: "8px 18px",
    width: "100%",
    "&:placeholder": {
      color: theme.palette.custom.beige500,
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.custom.beige500,
    borderWidth: "1px !important",
    borderRadius: 8,
    padding: 0,
    top: 0,
    "& legend": {
      display: "none",
    },
  },
  "& .MuiInputBase-root:not(.Mui-focused):hover .MuiOutlinedInput-notchedOutline":
    {
      borderColor: theme.palette.custom.beige500,
    },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.custom.grey900,
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.custom.grey500,
    margin: "4px 0 0",
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
    textAlign: "right",
  },
  "& .MuiInputAdornment-root": {
    margin: theme.spacing(1),
    "&:first-of-type": {
      marginRight: 0,
    },
  },
  "& .MuiOutlinedInput-input.MuiInputBase-input.MuiSelect-select": {
    height: 45,
    lineHeight: "45px",
    minHeight: 0,
    paddingTop: 0,
    paddingRight: 46,
    paddingBottom: 0,
    display: "flex",
    alignItems: "center",
  },
  "& .MuiSelect-icon": {
    fill: theme.palette.primary.main,
    fontSize: "1.8rem",
    right: 10,
  },
}));

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
