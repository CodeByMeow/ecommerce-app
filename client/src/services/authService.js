/**
 * @param {object} options - config object
 * @return {object} AuthServices - object for login action
 */

import axiosInstance from "./axiosInstance";

const AuthServices = {
  login: (authInfo) => {
    return axiosInstance.post("/account/login", authInfo);
  },
  register: (userInfo) => {
    return axiosInstance.post("/users", userInfo);
  },
  verifyToken: () => {
    return axiosInstance.get("/account");
  },
};

export default AuthServices;
