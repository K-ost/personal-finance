import { IconButton, TextFieldProps } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import searchIcon from "../../assets/icon-search.svg";
import CustomInput from "../../ui/CustomInput";

const Search = (props: TextFieldProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const paramValue = searchParams.get("q");

  const searchHandler = (): void => {
    if (search.length) {
      searchParams.set("q", search);
    } else {
      searchParams.delete("q");
    }
    setSearchParams(searchParams);
  };

  return (
    <CustomInput
      placeholder={t("filter.searchPlace")}
      defaultValue={paramValue}
      slotProps={{
        input: {
          endAdornment: (
            <IconButton type="button" aria-label="search" onClick={searchHandler}>
              <img src={searchIcon} alt="" />
            </IconButton>
          ),
        },
      }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      {...props}
    />
  );
};

export default Search;
