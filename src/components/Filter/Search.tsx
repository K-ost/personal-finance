import React, { useEffect, useState } from "react";
import CustomInput from "../../ui/CustomInput";
import { InputAdornment, TextFieldProps } from "@mui/material";
import searchIcon from "../../assets/icon-search.svg";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { useTranslation } from "react-i18next";

const Search = (props: TextFieldProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const debouncedSearch = useDebounce(search, 500);
  const { t } = useTranslation();

  useEffect(() => {
    if (debouncedSearch.length) {
      searchParams.set("q", debouncedSearch);
    } else {
      searchParams.delete("q");
    }
    setSearchParams(searchParams);
  }, [debouncedSearch, searchParams, setSearchParams]);

  const paramValue = searchParams.get("q");

  return (
    <CustomInput
      placeholder={t("filter.searchPlace")}
      defaultValue={paramValue}
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
