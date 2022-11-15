import React, { useState } from "react";
import { useStoreContext } from "../../contexts/StoreContext.js";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import "./SearchBar.css";
import useNavigateSearch from "../../hooks/useNagivateSearch.js";
import { PRODUCTS_ENDPOINT } from "../../config/domain.js";

const SearchBar = () => {
  const { onSearchProductHandler } = useStoreContext();
  const [isShowInput, setShowInput] = useState(false);
  const [searchVal, setSearchVal] = useState({
    search: "",
  });

  const navigate = useNavigateSearch();

  const onSubmitValue = () => {
    setShowInput(!isShowInput);
    const { search } = searchVal;
    if (!search) return;
    onSearchProductHandler(search);
    navigate(PRODUCTS_ENDPOINT, { title: search });
    setSearchVal({ search: "" });
  };

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    setSearchVal({ ...searchVal, [name]: value });
  };

  // submit value when press enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // console.log("Enter key pressed ✅");
      onSubmitValue();
    }
  };

  const onSearchHandler = () => {
    onSubmitValue();
  };

  return (
    <div className="flex items-center lg:ml-6 p-2 text-white hover:text-gray-500">
      <div className="searchBox flex items-center">
        <input
          className="searchInput text-sm focus:text-white"
          type="text"
          name="search"
          value={searchVal.search}
          placeholder="Search"
          autoComplete="off"
          onChange={onHandleInputChange}
          onKeyDown={handleKeyDown}
        />

        <span className="sr-only">Search</span>
        <button
          className="h-6 w-6 searchButton"
          onClick={() => {
            onSearchHandler();
          }}
        >
          <MagnifyingGlassIcon aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
