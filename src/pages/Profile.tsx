import { Skeleton } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import Sessions from "../components/Sessions";
import UserList from "../components/Users";
import useGetData from "../hooks/useGetData";
import useMutateData from "../hooks/useMutateData";
import { useUserRole } from "../store/useAuthStore";
import { UserType } from "../types/apiTypes";
import { Session } from "../types/profileTypes";

const Profile = (): JSX.Element => {
  const { t } = useTranslation();
  const role = useUserRole();
  const queryClient = useQueryClient();

  const {
    data: sessions,
    isLoading: sessionsIsLoading,
    isSuccess: sessionsIsSuccess,
  } = useGetData<Session[]>({
    key: ["sessions"],
    uri: "/sessions",
  });

  const {
    data: users,
    isLoading: usersIsLoading,
    isSuccess: usersIsSuccess,
  } = useGetData<UserType[]>({
    key: ["users"],
    uri: "/users",
  });

  const { mutate, isPending: sessionsIsPending } = useMutateData({
    key: ["remove sessions"],
    method: "DELETE",
    uri: "/clear",
  });

  const removeSessionsHandler = () => {
    mutate(null);
  };

  queryClient.invalidateQueries({
    queryKey: ["sessions"],
  });

  if (role !== "admin") return <Navigate to={"/"} />;

  return (
    <MainLayout title={t("nav.profile")}>
      {usersIsLoading && <Skeleton height={150} variant="rounded" sx={{ mb: 6 }} />}
      {usersIsSuccess && <UserList users={users} />}

      {sessionsIsLoading && <Skeleton height={150} variant="rounded" sx={{ mb: 6 }} />}
      {sessionsIsSuccess && (
        <Sessions
          isPending={sessionsIsPending}
          removeSessionsHandler={removeSessionsHandler}
          sessions={sessions}
        />
      )}
    </MainLayout>
  );
};

export default Profile;
