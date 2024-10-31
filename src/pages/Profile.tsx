import { useTranslation } from "react-i18next";
import MainLayout from "../components/MainLayout";
import { useAuthStore } from "../store/useAuthStore";
import useGetData from "../hooks/useGetData";
import { User } from "../types";
import { Skeleton } from "@mui/material";

const Profile = (): JSX.Element => {
  const { userId } = useAuthStore();
  const { t } = useTranslation();

  const {
    data: userData,
    isSuccess,
    isLoading,
  } = useGetData<User>({
    key: ["user"],
    uri: `/users/${userId}`,
  });

  const { data: usersData } = useGetData<User>({
    key: ["users"],
    uri: `/users`,
    enabled: isSuccess && userData.role === "admin",
  });

  return (
    <MainLayout title={t("nav.profile")}>
      {isLoading && <Skeleton height={100} />}
      {isSuccess && <h2>Hello, {userData?.name}</h2>}
      {isSuccess && userData.role === "admin" && (
        <pre>{JSON.stringify(usersData, null, 2)}</pre>
      )}
    </MainLayout>
  );
};

export default Profile;
