import { Skeleton } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import Sessions from "../components/Sessions";
import useGetData from "../hooks/useGetData";
import useMutateData from "../hooks/useMutateData";
import { useUserRole } from "../store/useAuthStore";
import { Session } from "../types/profileTypes";
import Wrap from "../ui/Wrap";

const Profile = (): JSX.Element => {
  const { t } = useTranslation();
  const role = useUserRole();
  const queryClient = useQueryClient();

  const {
    data: sessions,
    isSuccess: sessionsIsSuccess,
    isLoading: sessionsIsLoading,
  } = useGetData<Session[]>({
    key: ["sessions"],
    uri: "/sessions",
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
      <Wrap title="Users" mb={6}>
        Users
      </Wrap>

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
