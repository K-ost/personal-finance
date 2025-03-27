import { Box, Stack, Typography } from "@mui/material";
import { useAuthStore } from "../store/useAuthStore";
import { useTranslation } from "react-i18next";

const ProfileCard = (): JSX.Element => {
  const { avatar, email, name } = useAuthStore();
  const { t } = useTranslation();

  return (
    <Stack direction="row" sx={{ mb: 4 }}>
      {avatar && (
        <img
          src={avatar}
          alt={name}
          style={{
            width: 50,
            height: 50,
            objectFit: "cover",
            borderRadius: 4,
            marginRight: 16,
          }}
        />
      )}
      <Box>
        <Typography variant="h3">{t("profile.greet", { name })}</Typography>
        <Typography variant="body1">{email}</Typography>
      </Box>
    </Stack>
  );
};

export default ProfileCard;
