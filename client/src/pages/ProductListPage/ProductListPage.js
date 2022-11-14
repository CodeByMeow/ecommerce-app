import React, { useEffect } from "react";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import ProductList from "../../components/ProductList/ProductList";
import useSearch from "../../hooks/useSearch";
import useFetchProducts from "../../hooks/useFetchProducts";

const SearchPage = (props) => {
  const { products } = props;
  const params = useSearch();
  const searchedProducts = useFetchProducts(params);
  
  const notFoundProduct = (
    <div className="h-60 flex items-center justify-center">
      <h3 className="text-center text-xl text-indigo-600">
        Không có sản phẩm được tìm thấy
      </h3>
    </div>
  );

  return (
    <PageContainer title="Tìm kiếm sản phẩm">
      {products.length > 0 ? <ProductList /> : notFoundProduct}
    </PageContainer>
  );
};

export default SearchPage;
