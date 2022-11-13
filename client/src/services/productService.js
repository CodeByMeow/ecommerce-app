import axiosInstance from "./axiosInstance";

const productService = {
    getList: (params = {}) => {
        return axiosInstance.get("/products", { params });
    },
    getDetail: (slug) => {
        return axiosInstance.get(`${slug}`);
    },
    getSearchList: (query) => {
        // console.log(query)
        return axiosInstance.get(`/products?page=1&perpage=10&sort=desc&sortBy=price&title=${query}`).then((res) => res.data.data);
    },
};

export default productService;
