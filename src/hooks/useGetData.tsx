import { useQuery } from "@tanstack/react-query";

import { axiosService } from "../api/axiosService";

type useGetDataProps = {
  key: string[];
  uri: string;
  enabled?: boolean;
  staleTime?: number;
};

const useGetData = <T,>(props: useGetDataProps) => {
  const { enabled, key, uri, staleTime = 1000 * 60 } = props;

  return useQuery({
    queryKey: key,
    queryFn: () => axiosService<T, undefined>(uri),
    enabled,
    staleTime,
  });
};

export default useGetData;
