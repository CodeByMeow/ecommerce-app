import React, { useEffect, useState } from "react";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import ProductList from "../../components/ProductList/ProductList";
import useSearch from "../../hooks/useSearch";
import Pagination from "../../components/Pagination/Pagination";
import productService from "../../services/productService";
import useNavigateSearch from "../../hooks/useNagivateSearch";
import { PRODUCTS_ENDPOINT } from "../../config/domain";

const ProductListPage = () => {
    let params = useSearch();
    const [products, setProducts] = useState();
    const [currentPage, setCurrentPage] = useState(params?.page);
    const [error, setError] = useState(false);
    const navigate = useNavigateSearch();

    useEffect(() => {
        if (currentPage) navigate(PRODUCTS_ENDPOINT, { page: currentPage });
        productService
            .getList({ ...params, page: currentPage })
            .then((res) => setProducts(res.data.data))
            .catch(() => setError(true));
    }, [currentPage]);

    useEffect(() => {
        console.log(params);
        productService
            .getList(params)
            .then((res) => setProducts(res.data.data))
            .catch(() => setError(true));
    }, [params.title]);

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
