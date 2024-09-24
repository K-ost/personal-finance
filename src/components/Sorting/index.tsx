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

const SortBody = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
}));

const Sorting = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        sx={{ m: 0, mr: "auto" }}
      />

      {!isMobile && (
        <Typography variant="body1" sx={{ mr: theme.spacing(3) }}>
          Sort by
        </Typography>
      )}
      <CustomInput defaultValue="latest" select sx={{ m: 0 }}>
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </CustomInput>

      {!isMobile && (
        <Typography variant="body1" sx={{ mr: theme.spacing(3) }}>
          Category
        </Typography>
      )}
      <CustomInput defaultValue="all" select sx={{ m: 0 }}>
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
