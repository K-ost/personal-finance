import {
  Box,
  BoxProps,
  InputAdornment,
  MenuItem,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import searchIcon from "../../assets/icon-search.svg";
import { sortOptions, transactionsOptions } from "./constants";
import { useSearchParams } from "react-router-dom";

const SortBody = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Sorting = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <SortBody>
      <CustomInput
        placeholder="Search transaction"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <img src={searchIcon} alt="" />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          m: 0,
          mr: isMobile ? 0 : theme.spacing(6),
          mb: isMobile ? theme.spacing(4) : 0,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.value)
        }
      />

      {!isMobile && (
        <Typography
          variant="body1"
          color="textSecondary"
          whiteSpace="nowrap"
          sx={{ ml: "auto", mr: theme.spacing(3) }}
        >
          Sort by
        </Typography>
      )}

      <CustomInput
        defaultValue="date,asc"
        select
        sx={{
          m: 0,
          mr: isMobile ? 0 : theme.spacing(6),
          mb: isMobile ? theme.spacing(4) : 0,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          searchParams.set("sort", e.target.value.split(",")[0]);
          searchParams.set("order", e.target.value.split(",")[1]);
          setSearchParams(searchParams);
        }}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </CustomInput>

      {!isMobile && (
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ mr: theme.spacing(3) }}
        >
          Category
        </Typography>
      )}

      <CustomInput
        defaultValue="all"
        select
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
    </SortBody>
  );
};

export default Sorting;
