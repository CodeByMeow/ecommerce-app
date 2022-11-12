import React, { useEffect } from "react";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import ProductList from "../../components/ProductList/ProductList";
import useSearch from "../../hooks/useSearch";
import useFetchProducts from "../../hooks/useFetchProducts";

const SearchPage = () => {
    const params = useSearch();
    const products = useFetchProducts(params);

    return (
        <PageContainer title="Tìm kiếm sản phẩm">
            <ProductList products={products} />
        </PageContainer>
    );
};

export default SearchPage;
