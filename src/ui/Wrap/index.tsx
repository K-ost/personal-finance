import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import BtnMore from "../BtnMore";

type WrapProps = {
  children: React.ReactNode;
  title?: string;
  all?: string;
  alllink?: string;
};

const Wrap = (props: WrapProps): JSX.Element => {
  const { t } = useTranslation();
  const { children, title, all = t("links.seeDetails"), alllink } = props;

  return (
    <div {...props}>
      <div className="bg-white rounded-2xl p-6 sm:p-8">
        {title && (
          <div className="flex items-center justify-between mb-6">
            <Typography variant="h2" sx={{ m: 0 }}>
              {title}
            </Typography>
            {all && alllink && <BtnMore title={all} to={alllink} />}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Wrap;
