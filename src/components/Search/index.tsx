import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import useDebounce from "../../hooks/useDebounce";
import InputField from "../../ui/InputField";

const Search = (props: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
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
    <div {...props}>
      <InputField
        inputProps={{
          type: "search",
          placeholder: t("filter.searchPlace"),
          value: search,
          "aria-label": "Search",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
        }}
      />
    </div>
  );
};

export default Search;
