import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { useRefreshStore } from "../store/useRefreshStore";

type Props = {
  isError: boolean;
  error: string;
  key: string[];
};

const useUpdateRefresh = (props: Props) => {
  const { error, isError, key } = props;
  const isExpired = useRefreshStore((state) => state.isExpired);
  const setIsExpired = useRefreshStore((state) => state.setIsExpired);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!isError) return;
    if (error === "Invalid token") {
      setIsExpired(true);
    }
  }, [error, isError]);

  useEffect(() => {
    if (isExpired) return;
    queryClient.invalidateQueries({
      queryKey: key,
    });
  }, [isExpired]);
};

export default useUpdateRefresh;
