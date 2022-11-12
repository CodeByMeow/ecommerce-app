import axiosInstance from "./axiosInstance";

const productService = {
    getList: (params = {}) => {
        return axiosInstance.get("/products", { params });
    },
};

export default productService;
