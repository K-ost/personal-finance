import { Box, Typography } from "@mui/material";

import { getImageLink } from "../../utils/utils";
import { Card } from "./styles";

type UserCardProps = {
  avatar: string;
  name: string;
  category?: string;
};

const UserCard = (props: UserCardProps): JSX.Element => {
  const { avatar, name, category } = props;
  return (
    <Card>
      <img src={getImageLink(avatar)} alt="" loading="lazy" />
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>
        {category && (
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            {category}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default UserCard;
