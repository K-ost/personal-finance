import { Box, BoxProps, styled } from "@mui/material";

type WrapProps = {
  children: React.ReactNode;
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
  const { children } = props;
  return <WrapBox {...props}>{children}</WrapBox>;
};

export default Wrap;
