import React, { useContext, useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useStoreContext } from "../../contexts/StoreContext";

import RenderLoading from "../../components/Loading/RenderLoading";
import "./ProductList.css";

const ProductList = (props) => {
  const { loading } = useStoreContext();
  const { products } = props;

  if (loading) {
    return <RenderLoading />;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-10 md:py-16 px-4 md:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-6 md:gap-y-10 gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product) => {
              return <ProductItem key={product?._id} product={product} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
