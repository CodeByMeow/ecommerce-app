import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../contexts/StoreContext.js";
import productService from "../../services/productService.js";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import "./SearchBar.css";

const SearchBar = (props) => {
  const { products, onSearchProductHandler } = useStoreContext();
  const [isShowInput, setShowInput] = useState(false);
  const [searchVal, setSearchVal] = useState({
    search: "",
  });

  
  const navigate = useNavigate();

  const onSubmitValue = () => {
    setShowInput(!isShowInput);
    const { search } = searchVal;
    onSearchProductHandler(search);
    navigate(`/products?title=${search}`);
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

  const onSearchHandler = (e) => {
    onSubmitValue();
  };

  return (
    <div className="flex flex-col md:flex-row items-center lg:ml-6 p-2 text-white hover:text-gray-500">
      <div className="searchBox hidden md:flex items-center ">
        <input
          className="md:w-60 lg:w-0 searchInput text-sm focus:text-white"
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

      {/* Mobile search */}
      <div className="searchBox w-full flex justify-between items-center md:hidden">
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
