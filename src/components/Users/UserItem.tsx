import { Box, BoxProps, Chip, styled, Typography } from "@mui/material";
import { User, UserRole } from "../../types";

type UserProps = {
  user: User;
};

const Item = styled(Box)<BoxProps & { userrole: UserRole }>(({ theme, userrole }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.common.white,
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 4,
  borderColor: userrole === "admin" ? theme.palette.info.main : theme.palette.grey[300],
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(2),
}));

const UserItem = (props: UserProps): JSX.Element => {
  const { user } = props;
  return (
    <Item userrole={user.role}>
      <Typography variant="body1">
        <b>{user.name}</b> ({user.email})
      </Typography>
      <Chip label={user.role} color={user.role === "admin" ? "info" : "secondary"} />
    </Item>
  );
};

export default UserItem;
