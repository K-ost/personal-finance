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
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { SetURLSearchParams } from "react-router-dom";
import { getCategoryValue, getSortValue } from "../../utils/utils";

type SortingProps = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
};

const SortBody = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Sorting = (props: SortingProps): JSX.Element => {
  const { searchParams, setSearchParams } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    searchParams.set("q", debouncedSearch);
    setSearchParams(searchParams);
  }, [debouncedSearch]);

  const searchValue = searchParams.get("q");
  const sortValue = getSortValue(searchParams);
  const categoryValue = getCategoryValue(searchParams);

  return (
    <SortBody>
      <CustomInput
        placeholder="Search transaction"
        defaultValue={searchValue}
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
          setSearch(e.target.value)
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
        defaultValue={sortValue}
        select
        sx={{
          m: 0,
          mr: isMobile ? 0 : theme.spacing(6),
          mb: isMobile ? theme.spacing(4) : 0,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          searchParams.set("_sort", e.target.value.split(",")[0]);
          searchParams.set("_order", e.target.value.split(",")[1]);
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
        defaultValue={categoryValue}
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
