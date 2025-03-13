import { useQuery } from "@tanstack/react-query";
import { getData } from "../utils/api";
import { useAuthStore } from "../store/useAuthStore";

type useGetDataProps = {
  key: string[];
  uri: string;
  enabled?: boolean;
};

const useGetData = <T,>(props: useGetDataProps) => {
  const { enabled, key, uri } = props;
  const auth = useAuthStore((state) => state.auth);

  return useQuery({
    queryKey: key,
    queryFn: () => getData<T>(uri, auth?.accessToken),
    enabled,
  });
};

export default useGetData;
