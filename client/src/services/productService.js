import { PRODUCTS_ENDPOINT } from "../config/domain";
import axiosInstance from "./axiosInstance";

const productService = {
    getList: (params = {}) => {
        return axiosInstance.get(PRODUCTS_ENDPOINT, { params });
    },
    getDetail: (slug) => {
        return axiosInstance.get(`/products/${slug}`);
    },
    getSearchList: (query) => {
        // console.log(query)
        return axiosInstance.get(`/products?page=1&perpage=10&sort=desc&sortBy=price&title=${query}`).then((res) => res.data.data);
    },
};

export default productService;
