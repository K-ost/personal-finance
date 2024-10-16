import {
  Button,
  ButtonProps,
  Stack,
  StackProps,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppStore } from "../store/useAppStore";
import { useAuthStore } from "../store/useAuthStore";

type LangSwitcher = StackProps & {
  title?: string;
};

const LangBtn = styled(Button)<ButtonProps & { isauth?: "true" | "false" }>(
  ({ theme, isauth }) => ({
    borderColor: theme.palette.custom.grey300,
    borderRadius: 4,
    boxShadow: "none",
    minHeight: 0,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 700,
    lineHeight: theme.typography.body2.lineHeight,
    minWidth: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      color:
        isauth === "true"
          ? theme.palette.primary.main
          : theme.palette.common.white,
      "&.active": {
        backgroundColor: isauth === "true" ? 0 : theme.palette.common.white,
        color:
          isauth === "true"
            ? theme.palette.common.white
            : theme.palette.primary.main,
      },
    },
  })
);

const LangSwitcher = (props: LangSwitcher): JSX.Element => {
  const { title } = props;
  const { lang, setLang } = useAppStore();
  const { auth } = useAuthStore();
  const { setLogout } = useAuthStore();
  const isAuth = auth ? "true" : "false";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack direction="row" alignItems="center" {...props}>
      <Typography
        variant={isMobile ? "h2" : "h1"}
        sx={{ m: 0, mr: "auto", lineHeight: 1 }}
      >
        {title}
      </Typography>
      <LangBtn
        variant={lang === "en" ? "contained" : "outlined"}
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        sx={{ mr: 1 }}
        isauth={isAuth}
      >
        En
      </LangBtn>
      <LangBtn
        variant={lang === "ru" ? "contained" : "outlined"}
        className={lang === "ru" ? "active" : ""}
        onClick={() => setLang("ru")}
        sx={{ mr: 4 }}
        isauth={isAuth}
      >
        Ru
      </LangBtn>
      {auth && (
        <LangBtn
          variant="outlined"
          onClick={() => setLogout()}
          aria-label="Logout"
          isauth={isAuth}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(4 3)"
            >
              <path d="m10.595 10.5 2.905-3-2.905-3" />
              <path d="m13.5 7.5h-9" />
              <path d="m10.5.5-8 .00224609c-1.1043501.00087167-1.9994384.89621131-2 2.00056153v9.99438478c0 1.1045695.8954305 2 2 2h8.0954792" />
            </g>
          </svg>
        </LangBtn>
      )}
    </Stack>
  );
};

export default LangSwitcher;
