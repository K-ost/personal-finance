type FormBodyrops = {
  children: React.ReactNode;
};

const FormBody = (props: FormBodyrops) => {
  const { children } = props;
  return (
    <div className="bg-white rounded-2xl w-full max-w-140 p-6 md:p-8">{children}</div>
  );
};

export default FormBody;
