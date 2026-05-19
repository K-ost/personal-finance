type ProgressBarProps = {
  value: number;
  color: string;
  size?: "small" | "large";
};

const ProgressBar = (props: ProgressBarProps): JSX.Element => {
  const { color, value, size = "small" } = props;

  return (
    <div
      className={`bg-beige-100 ${size === "large" ? "h-8 rounded-sm p-1" : "h-2 rounded-lg"}`}
    >
      <div
        className={`transition duration-300 ${size === "large" ? "h-6 rounded-sm" : "h-2 rounded-lg"}`}
        style={{ backgroundColor: color, width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
