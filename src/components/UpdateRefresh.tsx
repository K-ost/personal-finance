import { FC, useEffect } from "react";

import useGetData from "../hooks/useGetData";
import { useAuthStore } from "../store/useAuthStore";
import { useRefreshStore } from "../store/useRefreshStore";
import { AuthType } from "../types/apiTypes";

const UpdateRefresh: FC = () => {
  const isExpired = useRefreshStore((state) => state.isExpired);
  const setIsExpired = useRefreshStore((state) => state.setIsExpired);
  const setToken = useAuthStore((state) => state.setToken);

  const { data, isSuccess } = useGetData<AuthType>({
    key: ["refresh"],
    uri: "/refresh",
    enabled: isExpired,
  });

  useEffect(() => {
    if (!isSuccess || !data.accessToken) return;
    setToken(data.accessToken);
    setIsExpired(false);
  }, [data, isSuccess]);

  return null;
};

export default UpdateRefresh;
