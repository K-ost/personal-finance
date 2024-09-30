import { Button, ButtonProps, styled } from "@mui/material";
import { Link } from "react-router-dom";

type BtnMoreProps = ButtonProps & {
  title?: string;
  to: string;
};

const More = styled(Button)(({ theme }) => ({
  color: theme.palette.custom.grey500,
  padding: 0,
  textTransform: "none",
  "& svg": {
    marginLeft: theme.spacing(3),
    "& path": {
      fill: theme.palette.custom.grey500,
    },
  },
  "&:hover": {
    background: 0,
    color: theme.palette.primary.main,
    "& svg path": {
      fill: theme.palette.primary.main,
    },
  },
}));

const BtnMore = (props: BtnMoreProps): JSX.Element => {
  const { title = "See All" } = props;
  return (
    <More variant="text" component={Link} disableRipple {...props}>
      {title}
      <svg
        fill="none"
        height="11"
        viewBox="0 0 6 11"
        width="6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m.853506.146465 5.000004 5.000005c.04648.04643.08336.10158.10853.16228.02516.06069.03811.12576.03811.19147 0 .0657-.01295.13077-.03811.19147-.02517.06069-.06205.11584-.10853.16228l-5.000004 5.00003c-.069927.07-.159054.1177-.256097.137-.097042.0193-.197637.0094-.289048-.0285-.091412-.0378-.16953-.102-.2244652-.1843-.0549354-.0823-.08421767-.179-.08413981-.278l-.00000043-9.999984c-.00007788-.098949.02920444-.195695.08413984-.277992.0549356-.082297.1330536-.1464431.2244646-.1843193.091412-.03787611.192007-.04777907.289049-.02845381.097042.01932521.186169.06700801.256097.13701411z" />
      </svg>
    </More>
  );
};

export default BtnMore;
