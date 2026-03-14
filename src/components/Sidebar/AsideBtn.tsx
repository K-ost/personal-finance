import { Button, ButtonProps, styled } from "@mui/material";

export type AsideIconType =
  | "min"
  | "overview"
  | "transactions"
  | "budgets"
  | "pots"
  | "recurringBills"
  | "logout";

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
  minWidth: 0,
  paddingBottom: 0,
  paddingRight: theme.spacing(4),
  paddingLeft: theme.spacing(8),
  position: "relative",
  textTransform: "none",
  transition: "none",
  "& .iconBox": {
    marginRight: theme.spacing(4),
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& svg.rotated": {
    transform: "matrix(-1,0,0,1,0,0)",
  },
  "&:hover": {
    color: theme.palette.common.white,
    "& svg:not(.stroked) path": {
      fill: theme.palette.common.white,
    },
    "& svg.stroked path": {
      stroke: theme.palette.common.white,
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
    "& svg:not(.stroked) path": {
      fill: theme.palette.custom.secondary.green,
    },
  },
  "&.opened": {
    "& svg.rotated": {
      transform: "matrix(1,0,0,1,0,0)",
    },
  },
  [theme.breakpoints.down("lg")]: {
    borderRadius: "8px 8px 0 0",
    display: "block",
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
    height: "auto",
    padding: "8px 8px 12px",
    textAlign: "center",
    "& .iconBox": {
      margin: "0 auto",
    },
    "& .btnTitle": {
      display: "block",
      marginTop: theme.spacing(1),
    },
    "&::before": {
      height: 4,
      top: "auto",
      width: "100%",
    },
  },
}));

const AsideBtn = (props: MinimizeBtnProps): JSX.Element => {
  return <AsideButton fullWidth {...props} />;
};

export default AsideBtn;
