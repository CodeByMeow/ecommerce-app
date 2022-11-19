import axios from "axios";
import { BASE_URL, UPLOAD_ENDPOINT } from "../config/domain";

const axiosFile = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "multipart/form-data",
        "x-token": localStorage.getItem("token") || null,
    },
});
const uploadImage = (file) => {
    return axiosFile.post(UPLOAD_ENDPOINT, { image: file });
};

export default uploadImage;
