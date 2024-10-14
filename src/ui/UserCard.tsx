import { Box, BoxProps, styled, Typography } from "@mui/material";
import { getImageLink } from "../utils/utils";

type UserCardProps = {
  avatar: string;
  name: string;
  category?: string;
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
  const { avatar, name, category } = props;
  return (
    <Card>
      <img src={getImageLink(avatar)} alt="" />
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
