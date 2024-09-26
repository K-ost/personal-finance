import React, { useState } from "react";
import CustomInput from "../../ui/CustomInput";
import { InputAdornment, TextFieldProps } from "@mui/material";
import searchIcon from "../../assets/icon-search.svg";
import useDebounce from "../../hooks/useDebounce";

type SearchProps = TextFieldProps & {};

const Search = (props: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <CustomInput
      placeholder="Search transaction"
      defaultValue={""}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <img src={searchIcon} alt="" />
            </InputAdornment>
          ),
        },
      }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value)
      }
      {...props}
    />
  );
};

export default Search;
