import { useEffect } from "react";

import { useRefreshStore } from "../store/useRefreshStore";

type Props = {
  isError: boolean;
  error: string;
};

const useUpdateRefresh = (props: Props) => {
  const { error, isError } = props;
  const setIsExpired = useRefreshStore((state) => state.setIsExpired);

  useEffect(() => {
    if (!isError) return;
    if (error === "Invalid token") {
      setIsExpired(true);
    }
  }, [error, isError]);
};

export default useUpdateRefresh;
