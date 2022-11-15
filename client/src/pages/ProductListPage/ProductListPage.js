import React, { useEffect, useState } from "react";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import ProductList from "../../components/ProductList/ProductList";
import useSearch from "../../hooks/useSearch";
import Pagination from "../../components/Pagination/Pagination";
import productService from "../../services/productService";
import useNavigateSearch from "../../hooks/useNagivateSearch";
import { PRODUCTS_ENDPOINT } from "../../config/domain";
import FilterCategory from "../../components/FilterCategory/FilterCategory";

const ProductListPage = () => {
    const params = useSearch();
    const { page, ...paramsNoPage } = params;
    const [products, setProducts] = useState();
    const [currentPage, setCurrentPage] = useState(page);
    const [error, setError] = useState(false);
    const navigate = useNavigateSearch();

    useEffect(() => {
        if (!currentPage) return;
        navigate(PRODUCTS_ENDPOINT, { ...params, page: currentPage });
        productService
            .getList({ ...params, page: currentPage })
            .then((res) => setProducts(res.data.data))
            .catch(() => setError(true));
    }, [currentPage]);

    useEffect(() => {
        productService
            .getList(paramsNoPage)
            .then((res) => setProducts(res.data.data))
            .catch(() => setError(true));
    }, [JSON.stringify(paramsNoPage)]);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };

    const notFoundProduct = (
        <div className="h-60 flex items-center justify-center">
            <h3 className="text-center text-xl text-indigo-600">
                Không có sản phẩm được tìm thấy
            </h3>
        </div>
    );

    return (
        <PageContainer title="Sản phẩm">
            <FilterCategory />
            {(error || products?.itemsList.length === 0) && notFoundProduct}
            {products && <ProductList products={products?.itemsList} />}
            {products?.paginator.pageCount > 1 && (
                <Pagination
                    pageCount={products?.paginator.pageCount}
                    handlePageClick={handlePageClick}
                    currentPage={currentPage - 1}
                />
            )}
        </PageContainer>
    );
};

export default ProductListPage;
