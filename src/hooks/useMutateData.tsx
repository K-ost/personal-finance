import { useMutation } from "@tanstack/react-query";

import { axiosServie } from "../api/axiosService";
import { API_Method } from "../types/apiTypes";

type useMutateDataProps = {
  key: string[];
  method: API_Method;
  uri: string;
};

const useMutateData = <T, K>(props: useMutateDataProps) => {
  const { key, method, uri } = props;

  return useMutation({
    mutationKey: key,
    mutationFn: (data: K) => axiosServie<T, K>(uri, method, data),
  });
};

export default useMutateData;
