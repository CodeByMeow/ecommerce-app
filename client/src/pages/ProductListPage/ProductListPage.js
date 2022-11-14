<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 04848d986b15e3f6e96a742d7d8f750a9accdc6b
import PageContainer from "../../layouts/PageContainer/PageContainer";
import ProductList from "../../components/ProductList/ProductList";
import useSearch from "../../hooks/useSearch";
import Pagination from "../../components/Pagination/Pagination";
import productService from "../../services/productService";
import useNavigateSearch from "../../hooks/useNagivateSearch";
import { PRODUCTS_ENDPOINT } from "../../config/domain";

const SearchPage = () => {
    const params = useSearch();
    const [products, setProducts] = useState();
    const [currentPage, setCurrentPage] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigateSearch();

    useEffect(() => {
        if (currentPage)
            navigate(PRODUCTS_ENDPOINT, { ...params, page: currentPage });
        productService
            .getList({ ...params, page: currentPage })
            .then((res) => setProducts(res.data.data))
            .catch(() => setError(true));
    }, [currentPage]);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };

    return (
<<<<<<< HEAD
        <PageContainer title="Tìm kiếm sản phẩm">
            {error && (
                <div>
                    <h3>Not found</h3>
                </div>
            )}
            {products && <ProductList products={products?.itemsList} />}
            {products?.paginator.pageCount > 1 && (
                <Pagination
                    pageCount={products?.paginator.pageCount}
                    handlePageClick={handlePageClick}
                />
            )}
=======
        <PageContainer title="Sản phẩm">
                <ProductList products={products?.itemsList} />
>>>>>>> 04848d986b15e3f6e96a742d7d8f750a9accdc6b
            </PageContainer>
            );
};

            export default SearchPage;
