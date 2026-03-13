import { useMutation } from "@tanstack/react-query";

import { useAuthStore } from "../store/useAuthStore";
import { API_Method } from "../types/types";
import { mutateData } from "../api/api";

type useMutateDataProps = {
  key: string[];
  method: API_Method;
  uri: string;
};

const useMutateData = <T, K>(props: useMutateDataProps) => {
  const { key, method, uri } = props;
  const token = useAuthStore((state) => state.token);

  return useMutation({
    mutationKey: key,
    mutationFn: (data: K) => mutateData<T, K>(uri, method, data, token),
  });
};

export default useMutateData;
