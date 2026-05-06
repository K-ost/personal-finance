import { useQuery } from "@tanstack/react-query";

import { axiosService } from "../api/axiosService";

type useGetDataProps = {
  key: string[];
  uri: string;
  enabled?: boolean;
};

const useGetData = <T,>(props: useGetDataProps) => {
  const { enabled, key, uri } = props;

  return useQuery({
    queryKey: key,
    queryFn: () => axiosService<T, undefined>(uri),
    enabled,
  });
};

export default useGetData;
