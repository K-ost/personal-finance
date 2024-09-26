import {
  MenuItem,
  Stack,
  StackProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import { sortOptions } from "./constants";
import { useSearchParams } from "react-router-dom";
import { getSortValue } from "../../utils/utils";

const Sorting = (props: StackProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          Sort by
        </Typography>
      )}

      <CustomInput
        value={sortValue}
        select
        fullWidth
        sx={{
          m: 0,
          mr: isMobile ? 0 : theme.spacing(6),
          mb: isMobile ? theme.spacing(4) : 0,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const sort = e.target.value.split(",")[0];
          const order = e.target.value.split(",")[1];
          if (e.target.value !== "date,desc") {
            searchParams.set("_sort", sort);
            searchParams.set("_order", order);
          } else {
            searchParams.delete("_sort");
            searchParams.delete("_order");
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
