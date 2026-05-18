import { UserType } from "../../types/apiTypes";
import Wrap from "../../ui/Wrap";
import UserItem from "./UserItem";

type UserListProps = {
  users: UserType[];
};

const UserList = (props: UserListProps): JSX.Element => {
  const { users } = props;

  return (
    <div className="mb-6">
      <Wrap title="Users">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </Wrap>
    </div>
  );
};

export default UserList;
