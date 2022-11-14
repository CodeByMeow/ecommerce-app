import { PRODUCTS_ENDPOINT } from "../config/domain";
import axiosInstance from "./axiosInstance";

const productService = {
    getList: (params = {}) => {
        return axiosInstance.get(PRODUCTS_ENDPOINT, { params });
    },
    getDetail: (slug) => {
        return axiosInstance.get(`${slug}`);
    },
};

export default productService;
