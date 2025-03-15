import { User } from "../../types";
import UserItem from "./UserItem";

type UserListProps = {
  data: User[];
};

const Users = (props: UserListProps): JSX.Element => {
  const { data } = props;
  return (
    <div>
      {data.map((el) => (
        <UserItem key={el._id} user={el} />
      ))}
    </div>
  );
};

export default Users;
