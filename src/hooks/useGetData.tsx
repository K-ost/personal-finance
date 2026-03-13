import { useQuery } from "@tanstack/react-query";

import { useAuthStore } from "../store/useAuthStore";
import { getData } from "../api/api";

type useGetDataProps = {
  key: string[];
  uri: string;
  enabled?: boolean;
};

const useGetData = <T,>(props: useGetDataProps) => {
  const { enabled, key, uri } = props;
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: key,
    queryFn: () => getData<T>(uri, token),
    enabled,
  });
};

export default useGetData;
