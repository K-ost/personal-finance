type BillsItemProps = {
  children: React.ReactNode;
  type: "paid" | "upcoming" | "soon";
};

const BillsItem = (props: BillsItemProps): JSX.Element => {
  const { children, type } = props;
  const borderColor =
    type === "paid"
      ? "border-l-custom-green"
      : type === "upcoming"
        ? "border-l-custom-yellow"
        : "border-l-custom-cyan";

  return (
    <div
      className={`bg-beige-100 rounded-lg flex justify-between relative px-4 py-5 mb-2 border-l-4 ${borderColor}`}
    >
      {children}
    </div>
  );
};

export default BillsItem;
