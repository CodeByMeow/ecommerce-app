import axiosInstance from "./axiosInstance";

const cartService = {
    addNewOrder: (item) => {
        return axiosInstance.post("/account/orders", item);
    },
};

export default cartService;
