import {
  MenuItem,
  Stack,
  StackProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import { transactionsOptions } from "./constants";
import { useSearchParams } from "react-router-dom";
import { getCategoryValue } from "../../utils/utils";
import { useTranslation } from "react-i18next";

const FilterCategory = (props: StackProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const currentValue = getCategoryValue(searchParams);

  return (
    <Stack direction="row" alignItems="center" {...props}>
      {!isMobile && (
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ ml: isMobile ? 4 : 6, mr: 3 }}
        >
          {t("filter.category")}
        </Typography>
      )}

      <CustomInput
        value={currentValue}
        select
        fullWidth
        sx={{ m: 0 }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value !== "all") {
            searchParams.set("category", e.target.value);
          } else {
            searchParams.delete("category");
          }
          setSearchParams(searchParams);
        }}
      >
        {transactionsOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </CustomInput>
    </Stack>
  );
};

export default FilterCategory;
