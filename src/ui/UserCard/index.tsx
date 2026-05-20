import { Typography } from "@mui/material";

import { getImageLink } from "../../utils/utils";

type UserCardProps = {
  avatar: string;
  name: string;
  category?: string;
};

const UserCard = (props: UserCardProps): JSX.Element => {
  const { avatar, name, category } = props;
  return (
    <div className="flex items-center text-primary">
      <img
        src={getImageLink(avatar)}
        alt=""
        loading="lazy"
        className="block rounded-[50%] w-10 h-10 mr-4"
      />
      <div>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>
        {category && (
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            {category}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default UserCard;
