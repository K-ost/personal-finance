import { UserType } from "../../types/apiTypes";
import Wrap from "../../ui/Wrap";
import UserItem from "./UserItem";

type UserListProps = {
  users: UserType[];
};

const UserList = (props: UserListProps): JSX.Element => {
  const { users } = props;

  return (
    <Wrap title="Users" mb={6}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Wrap>
  );
};

export default UserList;
