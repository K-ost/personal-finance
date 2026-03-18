import { FilterBody } from "./styles";

type FilterProps = {
  children: React.ReactNode;
};

const Filter = (props: FilterProps): JSX.Element => {
  const { children } = props;
  return <FilterBody>{children}</FilterBody>;
};

export default Filter;
