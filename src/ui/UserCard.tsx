import { Box, BoxProps, styled, Typography } from "@mui/material";
import { getImageLink } from "../utils/utils";

type UserCardProps = {
  avatar: string;
  name: string;
};

const Card = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  color: theme.palette.primary.main,
  display: "flex",
  "& img": {
    display: "block",
    borderRadius: "50%",
    height: 40,
    marginRight: theme.spacing(4),
    width: 40,
  },
}));

const UserCard = (props: UserCardProps) => {
  const { avatar, name } = props;
  return (
    <Card>
      <img src={getImageLink(avatar)} alt="" />
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        {name}
      </Typography>
    </Card>
  );
};

export default UserCard;
