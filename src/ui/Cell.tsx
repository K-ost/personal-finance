import { styled, TableCell, TableCellProps } from "@mui/material";

type CellProps = TableCellProps & {
  sm?: "true";
};

const CustomCell = styled(TableCell)<CellProps>(({ theme, sm }) => ({
  borderBottomColor: theme.palette.custom.grey100,
  color: theme.palette.custom.grey500,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: sm ? theme.spacing(2) : theme.spacing(4),
  paddingBottom: sm ? theme.spacing(2) : theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    paddingRight: theme.spacing(4),
    "&:last-child": {
      paddingRight: 0,
    },
  },
}));

const Cell = (props: CellProps): JSX.Element => {
  const { sm } = props;
  return <CustomCell sm={sm} {...props} />;
};

export default Cell;
