import { Typography } from "@mui/material";
import Btn from "../ui/Btn";
import { useAuthStore } from "../store/useAuthStore";

const Home = (): JSX.Element => {
  const { setLogout } = useAuthStore();

  return (
    <div>
      <Typography variant="h1">Home</Typography>
      <Btn onClick={() => setLogout()}>Logout</Btn>
    </div>
  );
};

export default Home;
