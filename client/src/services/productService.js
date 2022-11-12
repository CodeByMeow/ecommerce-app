import axiosInstance from "./axiosInstance";

const productService = {
    getList: (params = {}) => {
        return axiosInstance.get("/products", { params });
    },
    getDetail: (slug) => {
        return axiosInstance.get(`${slug}`);
    },
};

export default productService;
