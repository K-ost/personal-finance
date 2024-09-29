import { Box, BoxProps, styled, Typography } from "@mui/material";

type IconTitleProps = BoxProps & {
  color: string;
  title: string;
};

export const Circle = styled(Box)<BoxProps & { color: string }>(
  ({ theme, color }) => ({
    backgroundColor: color,
    borderRadius: "50%",
    height: 16,
    marginRight: theme.spacing(4),
    width: 16,
  })
);

const IconTitle = (props: IconTitleProps): JSX.Element => {
  const { color, title } = props;
  return (
    <Box display="flex" alignItems="center" {...props}>
      <Circle color={color} />
      <Typography variant="h2" color="primary" component="div" m={0}>
        {title}
      </Typography>
    </Box>
  );
};

export default IconTitle;
