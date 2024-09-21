import { useMutation } from "@tanstack/react-query";
import { requestData } from "../utils/api";
import { API_Method } from "../types";

type useMutateDataProps = {
  key: string[];
  method: API_Method;
  uri: string;
};

const useMutateData = <T,>(props: useMutateDataProps) => {
  const { key, method, uri } = props;
  return useMutation({
    mutationKey: key,
    mutationFn: (data: T) => requestData<T>(uri, method, data),
  });
};

export default useMutateData;
