import { BoxProps, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import BtnMore from "../../ui/BtnMore";
import { Wrapper } from "./styles";

type BudgetLatestProps = BoxProps & {
  category: string;
  children: React.ReactNode;
};

const BudgetLatest = (props: BudgetLatestProps): JSX.Element => {
  const { category, children } = props;
  const { t } = useTranslation();

  return (
    <Wrapper {...props}>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 5 }}>
        <Typography color="primary" variant="h3" sx={{ m: 0 }}>
          {t("budgets.latestTitle")}
        </Typography>
        <BtnMore title={t("budgets.seeAll")} to={`/transactions?category=${category}`} />
      </Stack>
      {children}
    </Wrapper>
  );
};

export default BudgetLatest;
