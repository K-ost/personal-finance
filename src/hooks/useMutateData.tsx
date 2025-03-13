import { useMutation } from "@tanstack/react-query";
import { mutateData } from "../utils/api";
import { API_Method } from "../types";
import { useAuthStore } from "../store/useAuthStore";

type useMutateDataProps = {
  key: string[];
  method: API_Method;
  uri: string;
};

const useMutateData = <T, K>(props: useMutateDataProps) => {
  const { key, method, uri } = props;
  const auth = useAuthStore((state) => state.auth);

  return useMutation({
    mutationKey: key,
    mutationFn: (data: K) => mutateData<T, K>(uri, method, data, auth?.accessToken),
  });
};

export default useMutateData;
