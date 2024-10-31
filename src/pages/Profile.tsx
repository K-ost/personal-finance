import { useTranslation } from "react-i18next";
import MainLayout from "../components/MainLayout";
import { useAuthStore } from "../store/useAuthStore";
import useGetData from "../hooks/useGetData";

const Profile = (): JSX.Element => {
  const { auth } = useAuthStore();
  const { t } = useTranslation();

  const { data } = useGetData({
    key: ["users"],
    uri: "/users",
  });

  return (
    <MainLayout title={t("nav.profile")}>
      <pre>{JSON.stringify(auth?.user, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </MainLayout>
  );
};

export default Profile;
