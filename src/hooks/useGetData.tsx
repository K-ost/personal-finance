import { useQuery } from "@tanstack/react-query";

import { apiRequest } from "../api/api";

type useGetDataProps = {
  key: string[];
  uri: string;
  enabled?: boolean;
};

const useGetData = <T,>(props: useGetDataProps) => {
  const { enabled, key, uri } = props;

  return useQuery({
    queryKey: key,
    queryFn: () => apiRequest<T, undefined>(uri),
    enabled,
  });
};

export default useGetData;
