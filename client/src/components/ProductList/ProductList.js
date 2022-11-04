import React, { useContext } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useStoreContext } from "../../contexts/StoreContext";
import "./ProductList.css";

const ProductList = (props) => {
  const { products } = useStoreContext();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-10 md:py-16 px-4 md:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-indigo-500">
          Popular products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-6 md:gap-y-10 gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            return <ProductItem product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
