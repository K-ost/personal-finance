type LangBtnProps = React.HTMLAttributes<HTMLButtonElement> & {
  isactive: "true" | "false";
};

const LangBtn = (props: LangBtnProps): JSX.Element => {
  const { isactive } = props;

  const color = `${isactive === "true" ? "bg-primary border-primary text-white" : "bg-white border-gray-300 text-primary"}`;

  return (
    <button
      className={`border ${color} cursor-pointer outline-none rounded-sm min-h-0 min-w-0 text-sm font-bold py-1 px-2 ml-1`}
      {...props}
    />
  );
};

export default LangBtn;
