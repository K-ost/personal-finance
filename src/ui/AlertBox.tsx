import { Alert, AlertProps, AlertTitle, Typography } from "@mui/material";

type AlertBoxProps = AlertProps & {
  children: React.ReactNode;
  title: string;
};

const AlertBox = (props: AlertBoxProps): JSX.Element => {
  const { children, title } = props;

  return (
    <Alert variant="outlined" {...props}>
      <AlertTitle
        sx={(theme) => ({
          fontSize: theme.typography.h3.fontSize,
          fontWeight: 700,
        })}
      >
        {title}
      </AlertTitle>
      <Typography variant="body1" component="div">
        {children}
      </Typography>
    </Alert>
  );
};

export default AlertBox;
