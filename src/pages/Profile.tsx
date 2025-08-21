import { useTranslation } from "react-i18next";
import MainLayout from "../components/MainLayout";
import { useAuthStore } from "../store/useAuthStore";
import Users from "../components/Users";
import { useNotificationStore } from "../store/useNotificationStore";
import { useQueryClient } from "@tanstack/react-query";
import useGetData from "../hooks/useGetData";
import useMutateData from "../hooks/useMutateData";
import { User } from "../types";
import { useEffect } from "react";
import { Box, Grid2, Typography } from "@mui/material";
import Btn from "../ui/Btn";
import UserForm from "../components/UserForm";
import ChangePass from "../components/ChangePass";
import ProfileCard from "../ui/ProfileCard";

const Profile = (): JSX.Element => {
  const { t } = useTranslation();
  const { role } = useAuthStore();
  const isAdmin = role === "admin";
  const setNotification = useNotificationStore((state) => state.setNotification);
  const queryClient = useQueryClient();

  const { data, isLoading, isSuccess } = useGetData<User[]>({
    key: ["users"],
    uri: "/users",
    enabled: isAdmin,
  });

  const {
    data: dbData,
    isPending,
    mutate,
  } = useMutateData<{ msg: string }, null>({
    key: ["db"],
    method: "DELETE",
    uri: "/clear",
  });

  const clearDB = () => {
    mutate(null, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      },
    });
  };

  useEffect(() => {
    setNotification(dbData?.msg);
  }, [dbData, setNotification]);

  return (
    <MainLayout title={t("nav.profile")}>
      <ProfileCard />

      <Grid2 container spacing={6}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <UserForm />
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 6 }}>
          <ChangePass />
        </Grid2>
      </Grid2>

      {isAdmin && (
        <Box sx={{ mt: 10 }}>
          <Typography variant="h2">{t("profile.userlistTitle")}</Typography>
          {isLoading && <p>{t("settings.loading")}</p>}
          {isSuccess && <Users data={data} />}
          <Btn color="error" onClick={clearDB}>
            {isPending ? t("settings.loading") : t("profile.clearDB")}
          </Btn>
        </Box>
      )}
    </MainLayout>
  );
};

export default Profile;
