type FilterProps = {
  children: React.ReactNode;
};

const Filter = (props: FilterProps): JSX.Element => {
  const { children } = props;
  return <div className="block sm:flex items-center sm:mb-6">{children}</div>;
};

export default Filter;
