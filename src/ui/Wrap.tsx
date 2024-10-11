import { Box, BoxProps, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BtnMore from "./BtnMore";

type WrapProps = {
  children: React.ReactNode;
  title?: string;
  all?: string;
  allLink?: string;
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
  const { children, title, all = "See Details", allLink } = props;
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
          {all && allLink && <BtnMore title={all} to={allLink} />}
        </Stack>
      )}
      {children}
    </WrapBox>
  );
};

export default Wrap;
