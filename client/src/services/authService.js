/**
 * @param {object} options - config object
 * @return {object} AuthServices - object for login action
 */

import axiosInstance from "./axiosInstance";

const AuthServices = {
    login: (authInfo) => {
        console.log(authInfo);
        return axiosInstance.post("/account/login", authInfo);
    },
    register: (userInfo) => {
        return axiosInstance.post("/users", userInfo);
    },
    verifyToken: (refreshToken) => {
        return axiosInstance.post("/account/token", refreshToken);
    },
};

export default AuthServices;
