import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";

const ProductList = (props) => {
    const { products } = props;

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-10 md:py-16 px-4 md:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-y-6 md:gap-y-10 gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                    {products &&
                        products.map((product) => {
                            return (
                                <ProductItem
                                    key={product._id}
                                    product={product}
                                />
                            );
                        })}
                    {!products && (
                        <div className="text-center text-gray-500 w-full">
                            Không có sản phẩm nào.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
