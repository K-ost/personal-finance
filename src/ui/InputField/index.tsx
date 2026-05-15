type InputFieldProps = {
  isError?: boolean;
  helper?: string;
  label?: string;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = (props: InputFieldProps): JSX.Element => {
  const { isError, helper, label, inputProps, leftAdornment, rightAdornment } = props;

  const borderColor = isError ? "border-red-700" : "border-gray-400";
  const textColor = isError ? "text-red-700" : "text-gray-500";
  const inputolor = isError ? "text-red-700" : "text-gray-900";

  return (
    <div>
      {label && (
        <label className={`text-xs ${textColor} font-bold mb-1 block`}>{label}</label>
      )}

      <div
        className={`flex items-center border ${borderColor} rounded-lg focus-within:border-gray-900`}
      >
        {leftAdornment && (
          <div className={`text-xs ${textColor} pl-4`}>{leftAdornment}</div>
        )}

        <input
          className={`bg-none border-0 h-10.75 px-4 py-2 w-full rounded-lg outline-0 text-sm ${inputolor} focus:text-gray-900`}
          type="text"
          {...inputProps}
        />

        {rightAdornment && <div className="text-xs pr-4">{rightAdornment}</div>}
      </div>

      {helper && <div className={`mt-1 text-xs ${textColor} text-right`}>{helper}</div>}
    </div>
  );
};

export default InputField;
