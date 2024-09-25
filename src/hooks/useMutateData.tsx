import { useMutation } from "@tanstack/react-query";
import { mutateData } from "../utils/api";
import { API_Method } from "../types";

type useMutateDataProps = {
  key: string[];
  method: API_Method;
  uri: string;
};

const useMutateData = <T, K>(props: useMutateDataProps) => {
  const { key, method, uri } = props;
  return useMutation({
    mutationKey: key,
    mutationFn: (data: K) => mutateData<T, K>(uri, method, data),
  });
};

export default useMutateData;
