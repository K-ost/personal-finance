import { TextFieldProps } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import useDebounce from "../../hooks/useDebounce";
import CustomInput from "../../ui/CustomInput";

const Search = (props: TextFieldProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get("q");

  const [search, setSearch] = useState<string>(paramValue ?? "");
  const debounced = useDebounce(search);
  const { t } = useTranslation();

  useEffect(() => {
    if (debounced.length) {
      searchParams.set("q", debounced);
    } else {
      searchParams.delete("q");
    }
    setSearchParams(searchParams);
  }, [debounced]);

  return (
    <CustomInput
      type="search"
      placeholder={t("filter.searchPlace")}
      value={search}
      slotProps={{
        htmlInput: { "aria-label": "Search" },
      }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      {...props}
    />
  );
};

export default Search;
