import { styled, TableCell, TableHead, TableRow } from "@mui/material";

const Cell = styled(TableCell)(({ theme }) => ({
  borderBottomColor: theme.palette.custom.grey100,
  color: theme.palette.custom.grey500,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
}));

const Head = (): JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        <Cell>Recipient / Sender</Cell>
        <Cell>Category</Cell>
        <Cell>Transaction Date</Cell>
        <Cell align="right">Amount</Cell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
