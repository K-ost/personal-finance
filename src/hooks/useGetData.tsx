import { useQuery } from "@tanstack/react-query";

import { getData } from "../api/api";

type useGetDataProps = {
  key: string[];
  uri: string;
  enabled?: boolean;
};

const useGetData = <T,>(props: useGetDataProps) => {
  const { enabled, key, uri } = props;

  return useQuery({
    queryKey: key,
    queryFn: () => getData<T>(uri),
    enabled,
  });
};

export default useGetData;
