import { useEffect } from "react";

import { useRefreshStore } from "../store/useRefreshStore";
import useGetData from "./useGetData";

type UseRefreshProps = {
  key: string[];
  uri: string;
};

const useRefresh = <T,>(props: UseRefreshProps) => {
  const { key, uri } = props;
  const isExpired = useRefreshStore((state) => state.isExpired);
  const setIsExpired = useRefreshStore((state) => state.setIsExpired);

  const queryObject = useGetData<T>({
    key,
    uri,
    enabled: !isExpired,
  });

  useEffect(() => {
    if (!queryObject.isError) return;
    if (queryObject.error.message === "Invalid token") {
      setIsExpired(true);
    }
  }, [queryObject.isError, queryObject.error]);

  return queryObject;
};

export default useRefresh;
