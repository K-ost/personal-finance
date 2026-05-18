import { useQueryClient } from "@tanstack/react-query";

import useMutateData from "../../hooks/useMutateData";
import { useNotificationStore } from "../../store/useNotificationStore";
import { AuthType, UserType } from "../../types/apiTypes";
import Btn from "../../ui/Btn";

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

  const deleteHandler = () => {
    mutate(null, {
      onSuccess(data) {
        setNotification(data.msg);
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      },
    });
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 min-h-11 rounded-lg mb-2 py-1 pl-4 pr-1">
      <div key={user.id}>
        {user.email} - {user.name}
      </div>
      {user.role !== "admin" && (
        <Btn
          size="small"
          color="error"
          variant="outlined"
          onClick={deleteHandler}
          aria-label="Delete user"
        >
          {isPending ? "Loading..." : "Delete"}
        </Btn>
      )}
    </div>
  );
};

export default UserItem;
