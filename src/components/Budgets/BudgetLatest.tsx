import { Box, BoxProps, Stack, styled, Typography } from "@mui/material";
import BtnMore from "../../ui/BtnMore";
import { useTranslation } from "react-i18next";

type BudgetLatestProps = BoxProps & {
  category: string;
  children: React.ReactNode;
};

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.custom.beige100,
  borderRadius: 12,
  padding: theme.spacing(5),
}));

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
