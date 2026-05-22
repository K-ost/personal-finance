type CellProps = React.HTMLAttributes<HTMLTableCellElement> & {
  align?: "left" | "center" | "right";
  type?: "td" | "th";
};

const Cell = (props: CellProps): JSX.Element => {
  const { align = "left", type = "td" } = props;
  const textAlign = `text-${align}`;
  const cellClass = `border-b border-b-grey-100 text-grey-500 font-normal py-2 text-sm ${textAlign} pl-0 pr-4 last:pr-0`;

  if (type === "th") return <th className={cellClass} {...props} />;

  return <td className={cellClass + " sm:py-4"} {...props} />;
};

export default Cell;
