import { Typography } from "@mui/material";

type IconTitleProps = React.HTMLAttributes<HTMLDivElement> & {
  color: string;
  title: string;
};

export const Circle = ({ color }: { color: string }) => {
  return (
    <div className="rounded-[50%] h-4 w-4 mr-4" style={{ backgroundColor: color }}></div>
  );
};

const IconTitle = (props: IconTitleProps): JSX.Element => {
  const { color, title } = props;
  return (
    <div className="flex items-center" {...props}>
      <Circle color={color} />
      <Typography variant="h2" color="primary" component="div" m={0}>
        {title}
      </Typography>
    </div>
  );
};

export default IconTitle;
