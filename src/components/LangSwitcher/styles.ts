import { Button, ButtonProps, styled } from "@mui/material";

export const LangBtn = styled(Button)<ButtonProps & { isauth?: "true" | "false" }>(
  ({ theme, isauth }) => ({
    borderColor: theme.palette.custom.grey300,
    borderRadius: 4,
    boxShadow: "none",
    minHeight: 0,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 700,
    lineHeight: theme.typography.body2.lineHeight,
    minWidth: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      color: isauth === "true" ? theme.palette.primary.main : theme.palette.common.white,
      "&.active": {
        backgroundColor: isauth === "true" ? 0 : theme.palette.common.white,
        color:
          isauth === "true" ? theme.palette.common.white : theme.palette.primary.main,
      },
    },
  }),
);
