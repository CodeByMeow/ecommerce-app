import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../contexts/StoreContext.js";
import productService from "../../services/productService.js";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import "./SearchBar.css";

const SearchBar = () => {
  const { products, onSearchProductHanlder } = useStoreContext();
  const [searchedProducts, setSearchedProducts] = useState(products);
  const [searchVal, setSearchVal] = useState({
    search: "",
  });

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    setSearchVal({ ...searchVal, [name]: value });
  };

  const navigate = useNavigate();

  const onSearchHandler = (events) => {
    // events.preventDefault();
    const { search } = searchVal;
    onSearchProductHanlder(search);
    navigate("/products");
    setSearchVal({search: ""})
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
        />
        {/*  {isShowInput ? (<input
          className="searchInput text-sm focus:text-white"
          type="text"
          name="search"
          value={searchVal.search}
          placeholder="Search"
          onChange={onHandleInputChange}
        />) : ""} */}

        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon
          className="h-6 w-6 searchButton"
          aria-hidden="true"
          onClick={() => {
            onSearchHandler();
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
