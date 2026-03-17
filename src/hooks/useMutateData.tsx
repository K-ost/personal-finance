import { useMutation } from "@tanstack/react-query";

import { apiRequest } from "../api/api";
import { API_Method } from "../types/types";

type useMutateDataProps = {
  key: string[];
  method: API_Method;
  uri: string;
};

const useMutateData = <T, K>(props: useMutateDataProps) => {
  const { key, method, uri } = props;

  return useMutation({
    mutationKey: key,
    mutationFn: (data: K) => apiRequest<T, K>(uri, method, data),
  });
};

export default useMutateData;
