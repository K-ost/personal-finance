import {
  MenuItem,
  Stack,
  StackProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import { useSearchParams } from "react-router-dom";
import { getSortValue } from "../../utils/utils";
import { useTranslation } from "react-i18next";
import useSortConstants from "./useSortConstants";

const Sorting = (props: StackProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const { sortOptions } = useSortConstants();

  const sortValue = getSortValue(searchParams);

  return (
    <Stack direction="row" alignItems="center" {...props}>
      {!isMobile && (
        <Typography
          variant="body1"
          color="textSecondary"
          whiteSpace="nowrap"
          sx={{ mr: theme.spacing(3) }}
        >
          {t("filter.sortby")}
        </Typography>
      )}

      <CustomInput
        value={sortValue}
        select
        fullWidth
        sx={{
          m: 0,
          mb: isMobile ? theme.spacing(4) : 0,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const sort = e.target.value.split(",")[0];
          if (e.target.value !== "-date") {
            searchParams.set("sort", sort);
          } else {
            searchParams.delete("sort");
          }
          setSearchParams(searchParams);
        }}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </CustomInput>
    </Stack>
  );
};

export default Sorting;
