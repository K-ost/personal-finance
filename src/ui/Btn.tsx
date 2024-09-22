import { Button, ButtonProps, styled } from "@mui/material";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 8,
  boxShadow: "none !important",
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.body1.fontSize,
  fontWeight: 700,
  lineHeight: theme.typography.body1.lineHeight,
  padding: theme.spacing(4),
  textTransform: "none",
  "&.MuiButton-colorSecondary:hover": {
    boxShadow: `inset 0 0 0 1px ${theme.palette.custom.beige500} !important`,
  },
}));

const Btn = (props: ButtonProps): JSX.Element => {
  return <CustomButton variant="contained" {...props} />;
};

export default Btn;
