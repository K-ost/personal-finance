import { Box, BoxProps, styled } from "@mui/material";

type FormBodyrops = {
  children: React.ReactNode;
};

const Div = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 12,
  maxWidth: 560,
  padding: theme.spacing(8),
  width: "100%",
}));

const FormBody = (props: FormBodyrops) => {
  const { children } = props;
  return <Div>{children}</Div>;
};

export default FormBody;
