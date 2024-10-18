import { Button, ButtonProps, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  boxShadow: "none !important",
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.body1.fontSize,
  fontWeight: 700,
  minHeight: 52,
  lineHeight: theme.typography.body1.lineHeight,
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  textTransform: "none",
  "&.MuiButton-sizeSmall": {
    borderRadius: 4,
    minHeight: 32,
  },
  "&.MuiButton-colorSecondary:hover": {
    boxShadow: `inset 0 0 0 1px ${theme.palette.custom.beige500} !important`,
  },
  "&:disabled": {
    backgroundColor: theme.palette.custom.grey100,
  },
}));

const Btn = (props: ButtonProps): JSX.Element => {
  return <CustomButton variant="contained" {...props} />;
};

export default Btn;
