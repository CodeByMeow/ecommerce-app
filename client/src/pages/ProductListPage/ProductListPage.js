import React, { useEffect, useState } from "react";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import ProductList from "../../components/ProductList/ProductList";
import useSearch from "../../hooks/useSearch";
import useFetchProducts from "../../hooks/useFetchProducts";
import ProductService from "../../services/productService";

const SearchPage = (props) => {
//   const { products } = props;

  const params = useSearch();
  const searchedProducts = useFetchProducts(params);
  //   console.log("Searched Products", searchedProducts);
  const notFoundProduct = (
    <div className="h-60 flex items-center justify-center">
      <h3 className="text-center text-xl text-indigo-600">
        Không có sản phẩm được tìm thấy
      </h3>
    </div>
  );

  return (
    <PageContainer title="Tìm kiếm sản phẩm">
      {searchedProducts.length === 0 ? (
        notFoundProduct
      ) : (
        <ProductList products={searchedProducts} />
      )}
    </PageContainer>
  );
};

export default SearchPage;
