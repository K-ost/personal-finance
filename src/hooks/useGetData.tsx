import { useQuery } from "@tanstack/react-query";
import { requestData } from "../utils/api";

type useGetDataProps = {
  key: string[];
  uri: string;
  enabled?: boolean;
};

const useGetData = <T,>(props: useGetDataProps) => {
  const { enabled, key, uri } = props;
  return useQuery({
    queryKey: key,
    queryFn: () => requestData<T>(uri, "GET"),
    enabled,
  });
};

export default useGetData;
