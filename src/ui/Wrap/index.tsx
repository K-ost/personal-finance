import { BoxProps, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import BtnMore from "../BtnMore";
import { WrapBox } from "./styles";

type WrapProps = BoxProps & {
  children: React.ReactNode;
  title?: string;
  all?: string;
  alllink?: string;
};

const Wrap = (props: WrapProps): JSX.Element => {
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
