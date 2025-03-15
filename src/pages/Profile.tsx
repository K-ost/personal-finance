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
import { Box, Typography } from "@mui/material";
import Btn from "../ui/Btn";

const Profile = (): JSX.Element => {
  const { t } = useTranslation();
  const auth = useAuthStore((state) => state.auth);
  const isAdmin = auth?.user.role === "admin";
  const setNotification = useNotificationStore((state) => state.setNotification);
  const queryClient = useQueryClient();

  const { data, isLoading, isSuccess } = useGetData<User[]>({
    key: ["users"],
    uri: "/users",
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
  }, [dbData]);

  return (
    <MainLayout title={t("nav.profile")}>
      <p>{t("profile.greet", { name: auth?.user.name })}</p>
      {isAdmin && (
        <>
          <Typography variant="h2">{t("profile.userlistTitle")}</Typography>
          {isLoading && <p>{t("settings.loading")}</p>}
          {isSuccess && <Users data={data} />}
          <Box sx={{ mt: 10 }}>
            <Btn color="error" onClick={clearDB}>
              {isPending ? t("settings.loading") : t("profile.clearDB")}
            </Btn>
          </Box>
        </>
      )}
    </MainLayout>
  );
};

export default Profile;
