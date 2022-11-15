import axiosInstance from "./axiosInstance";
import { CATEGORY_ENDPOINT } from "../config/domain";
export default {
    getAll: () => {
        return axiosInstance.get(CATEGORY_ENDPOINT);
    },
};
