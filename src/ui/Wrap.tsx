import { Box, BoxProps, Stack, styled, Typography } from "@mui/material";
import BtnMore from "./BtnMore";
import { useTranslation } from "react-i18next";

type WrapProps = {
  children: React.ReactNode;
  title?: string;
  all?: string;
  alllink?: string;
};

const WrapBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 12,
  padding: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(6)} ${theme.spacing(5)}`,
  },
}));

const Wrap = (props: WrapProps & BoxProps): JSX.Element => {
  const { t } = useTranslation();
  const { children, title, all = t("links.seeDetails"), alllink } = props;

  return (
    <WrapBox {...props}>
      {title && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 6 }}
        >
          <Typography variant="h2" sx={{ m: 0 }}>
            {title}
          </Typography>
          {all && alllink && <BtnMore title={all} to={alllink} />}
        </Stack>
      )}
      {children}
    </WrapBox>
  );
};

export default Wrap;
