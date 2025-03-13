import { useTranslation } from "react-i18next";
import MainLayout from "../components/MainLayout";
import { useAuthStore } from "../store/useAuthStore";
import Users from "../components/Users";

const Profile = (): JSX.Element => {
  const { t } = useTranslation();
  const auth = useAuthStore((state) => state.auth);
  const isAdmin = auth?.user.role === "admin";

  return (
    <MainLayout title={t("nav.profile")}>
      <p>{auth?.user.email}</p>
      {isAdmin && <Users />}
    </MainLayout>
  );
};

export default Profile;
