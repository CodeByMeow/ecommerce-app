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
      <div className="lg:container mx-auto pb-8 md:pb-10 px-4 md:px-8 lg:px-10">
        <div className="mt-6 grid grid-cols-1 gap-y-6 md:gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
