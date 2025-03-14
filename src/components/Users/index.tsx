import { Box, Typography } from "@mui/material";
import useGetData from "../../hooks/useGetData";
import { User } from "../../types";
import Btn from "../../ui/Btn";
import useMutateData from "../../hooks/useMutateData";
import { useEffect } from "react";
import { useNotificationStore } from "../../store/useNotificationStore";
import { useQueryClient } from "@tanstack/react-query";
import UsersList from "./UsersList";

const Users = (): JSX.Element => {
  const setNotification = useNotificationStore((state) => state.setNotification);
  const queryClient = useQueryClient();

  const { data, isLoading, isSuccess } = useGetData<User[]>({
    key: ["users"],
    uri: "/users",
  });

  const {
    data: dbData,
    isPending,
    mutate,
  } = useMutateData<{ msg: string }, null>({
    key: ["db"],
    method: "DELETE",
    uri: "/clear",
  });

  const clearDB = () => {
    mutate(null, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      },
    });
  };

  useEffect(() => {
    setNotification(dbData?.msg);
  }, [dbData]);

  return (
    <div>
      <Typography variant="h2">Users list</Typography>
      {isLoading && <p>Loading users...</p>}
      {isSuccess && <UsersList data={data} />}
      <Box sx={{ mt: 10 }}>
        <Btn color="error" onClick={clearDB}>
          {isPending ? "Loading..." : "Clear database"}
        </Btn>
      </Box>
    </div>
  );
};

export default Users;
