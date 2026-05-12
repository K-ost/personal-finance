import { Box } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

import useMutateData from "../../hooks/useMutateData";
import { useNotificationStore } from "../../store/useNotificationStore";
import { AuthType, UserType } from "../../types/apiTypes";
import Btn from "../../ui/Btn";
import { Item } from "./styles";

type UserItemProps = {
  user: UserType;
};

const UserItem = ({ user }: UserItemProps): JSX.Element => {
  const setNotification = useNotificationStore((state) => state.setNotification);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutateData<AuthType, null>({
    key: ["delete user"],
    method: "DELETE",
    uri: `/users/${user.id}`,
  });

  queryClient.invalidateQueries({
    queryKey: ["users"],
  });

  const deleteHandler = () => {
    mutate(null, {
      onSuccess(data) {
        setNotification(data.msg);
      },
    });
  };

  return (
    <Item>
      <Box key={user.id}>
        {user.email} - {user.name}
      </Box>
      {user.role !== "admin" && (
        <Btn size="small" color="error" variant="outlined" onClick={deleteHandler}>
          {isPending ? "Loading..." : "Delete"}
        </Btn>
      )}
    </Item>
  );
};

export default UserItem;
