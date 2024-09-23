import { Button, ButtonProps, styled } from "@mui/material";

export type AsideIconType =
  | "min"
  | "overview"
  | "transactions"
  | "budgets"
  | "pots"
  | "bills";

type MinimizeBtnProps = ButtonProps & {
  to?: string;
};

const AsideButton = styled(Button)<ButtonProps>(({ theme }) => ({
  background: 0,
  border: 0,
  borderRadius: "0 12px 12px 0",
  color: theme.palette.custom.grey300,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.h3.fontSize,
  fontWeight: 500,
  justifyContent: "flex-start",
  lineHeight: theme.typography.h3.lineHeight,
  paddingTop: 0,
  height: 56,
  paddingBottom: 0,
  paddingRight: theme.spacing(4),
  paddingLeft: theme.spacing(8),
  position: "relative",
  textTransform: "none",
  transition: "none",
  "& svg": {
    marginRight: theme.spacing(4),
  },
  "& svg.rotated": {
    transform: "matrix(-1,0,0,1,0,0)",
  },
  "&:hover": {
    color: theme.palette.common.white,
    "& svg path": {
      fill: theme.palette.common.white,
    },
  },
  "&::before": {
    backgroundColor: theme.palette.custom.secondary.green,
    content: '""',
    display: "none",
    width: 4,
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
  },
  "&.active": {
    backgroundColor: theme.palette.custom.beige100,
    color: theme.palette.primary.main,
    "&::before": {
      display: "block",
    },
    "& svg path": {
      fill: theme.palette.custom.secondary.green,
    },
  },
  "&.opened": {
    "& svg.rotated": {
      transform: "matrix(1,0,0,1,0,0)",
    },
  },
}));

const AsideBtn = (props: MinimizeBtnProps): JSX.Element => {
  return <AsideButton fullWidth {...props} />;
};

export default AsideBtn;
